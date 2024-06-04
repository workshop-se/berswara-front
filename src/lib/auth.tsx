'use server'
import { cookies } from "next/headers";

const HOST = process.env.HOST_AUTH;

function parseJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${HOST}/authentications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (!data.error) {
      const accessToken = parseJwt(data.data.accessToken);
      const refreshToken = parseJwt(data.data.refreshToken);
      cookies().set('accessToken', data.data.accessToken, { expires: new Date(accessToken.exp * 1000), path: '/' });
      cookies().set('refreshToken', data.data.refreshToken, { expires: new Date(refreshToken.exp * 1000), path: '/' });
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    return { error: true, message: error };
  }
}

const signup = async (fullname: string, email: string, username: string, password: string) => {
  try {
    const response = await fetch(`${HOST}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ fullname, email, username, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const logout = async () => {
  try {
    const response = await fetch(`${HOST}/authentications`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: cookies().get('refreshToken') }),
    });
    const data = await response.json();
    cookies().delete('accessToken');
    cookies().delete('refreshToken');
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const updateSession = async () => {
  if (!cookies().has('refreshToken')) return null;
  const session = cookies().get('refreshToken')?.value;
  try {
    const response = await fetch(`${HOST}/authentications`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: session }),
    });
    const data = await response.json();
    if (data.error) {
      cookies().delete('accessToken');
      cookies().delete('refreshToken');
      return data;
    }
    const accessToken = parseJwt(data.data.accessToken);
    cookies().set('accessToken', data.data.accessToken, { expires: new Date(accessToken.exp * 1000), path: '/' });
    return data;

  } catch (error) {
    console.error('Error:', error);
    return error
  }
}

export { login, signup, logout, updateSession };
