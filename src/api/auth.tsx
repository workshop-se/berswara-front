const HOST = process.env.BE_HOST||'http://localhost:3501';
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
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

export { login };
