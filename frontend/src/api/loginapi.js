import React from 'react';
import { useNavigate } from 'react-router-dom';
import login_page from '../page/login_page';

const loginApi = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    postLoginData(email, password);
    };
        const postLoginData = async (email, password) => {
            try {
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Login successful:', data);
                    navigate('/dashboard');
                }
                else {
                    const errorData = await response.json();
                    console.error('Login failed:', errorData);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        };

export default loginApi;



