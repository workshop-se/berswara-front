'use server'
import { cookies } from "next/headers";
import { User } from "./types";


const HOST = process.env.HOST_AUTH || "http://localhost:3001";

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
      cookies().set(
        'accessToken',
        data.data.accessToken,
        { expires: new Date(accessToken.exp * 1000), path: '/', httpOnly: true }
      );
      cookies().set(
        'refreshToken',
        data.data.refreshToken,
        { expires: new Date(refreshToken.exp * 1000), path: '/', httpOnly: true });
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
  if (cookies().has('accessToken')) return { message: 'Session already updated' };

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
    cookies().set(
      'accessToken',
      data.data.accessToken,
      { expires: new Date(accessToken.exp * 1000), path: '/', httpOnly: true }
    );
    return data;

  } catch (error) {
    console.error('Error:', error);
    return error
  }
}

const getUsername = async () => {
  if (!cookies().has('accessToken')) return null;
  const session = cookies().get('accessToken')?.value;
  const accessToken = parseJwt(session!);
  return accessToken.username;
}

const getProfile = async () => {
  try {
    const response = await fetch(`${HOST}/users/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('accessToken')?.value}`,
      },
    });
    const data = await response.json();
    const formattedData = data.data as User;

    return formattedData
  } catch (error) {
    return { error: true, message: error };
  }
}

const updateProfile = async (profile: User) => {
  try {
    const response = await fetch(`${HOST}/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies().get('accessToken')?.value}`,
      },
      body: JSON.stringify({
        fullname: profile.fullname,
        email: profile.email,
        username: profile.username,
        password: profile.password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: true, message: error };
  }
}

export { login, signup, logout, updateSession, getUsername, getProfile, updateProfile };
