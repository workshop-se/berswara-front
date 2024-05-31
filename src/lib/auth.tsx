'use server'
import { cookies } from "next/headers";

const HOST_AD = process.env.HOST_AD || 'http://localhost:3501';

function parseJwt(token:string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${HOST_AD}/authentications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    const accessToken = parseJwt(data.data.accessToken);
    const refreshToken = parseJwt(data.data.refreshToken);
    cookies().set('accessToken', data.data.accessToken, { expires: new Date(accessToken.exp*1000), path: '/' });
    cookies().set('refreshToken', data.data.refreshToken, { expires: new Date(refreshToken.exp*1000), path: '/' });
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const signup = async (fullname: string, email: string, username: string, password: string) => {
  try {
    const response = await fetch(`${HOST_AD}/users`, {
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

export { login, signup };
