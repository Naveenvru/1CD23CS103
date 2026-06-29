

const APIURL = 'http://localhost:3001';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${APIURL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${APIURL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};
export const logout = async () => {
    try {       
         await axios.post(`${APIURL}/logout`);
    } catch (error) {
      throw new Error('Logout failed');
    }
  };
  