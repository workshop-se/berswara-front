const HOST_AD = process.env.HOST_AD||'http://localhost:3501';
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
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

const signup = async (fullname:string, email:string, username:string, password:string) => {
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
