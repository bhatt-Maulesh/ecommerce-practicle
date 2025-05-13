import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import userData  from '../Data/user.json';

function Login() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();
    // handle form values change function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }
    // handle form submit function
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (formValues.username === '' || formValues.password === '') {
            setError({
                username: formValues.username === '' ? 'Username is required' : '',
                password: formValues.password === '' ? 'Password is required' : ''
            });
        } else {
            debugger
            // Perform login action
            console.log('Login successful');
            console.log('========>>',userData);
            const user = userData.find(u => u.email === formValues.username && u.password === formValues.password);
            if (user) {
                // Store user data in local storage
                localStorage.setItem('user', JSON.stringify(user));
                // Redirect to dashboard
                if (user.role === 'admin') {
                    navigate('/dashboard');
                }else{
                    navigate('/home');
                }
            } else {
                alert('Invalid username or password');
            } 
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <form onSubmit={handleSubmit} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 ,textAlign: 'center'}}>
                        <Typography variant='h4'>Login</Typography>
                        {/* user name field */}
                        <TextField type='text' label="username" name='username' variant="outlined" value={formValues.username} onChange={handleChange}/>
                        {error.username && <Typography variant='caption' color='error' sx={{textAlign:'left'}}>{error.username}</Typography>}
                        
                        {/* password field */}
                        <TextField type='password' label="password" name='password' variant="outlined" value={formValues.password} onChange={handleChange}/>
                        {error.password && <Typography variant='caption' color='error' sx={{textAlign:'left'}}>{error.password}</Typography>}

                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Login