import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

function AuthPage() {
    return (
        <Container sx={{ maxWidth: '500px', width: '500px' }}>
            <Box 
            sx={{
                display: 'flex',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Paper sx ={{ padding: 2, marginBottom: 3 }} >
                    <Typography variant='h1' component={'h1'}>
                        maib
                    </Typography>
                </Paper>
                <Routes>
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='register' element={<RegisterScreen />} />
                </Routes>
            </Box>
        </Container>
    )
}

export default AuthPage