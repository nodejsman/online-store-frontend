import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginScreen() {

  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),

    onSubmit: (values) => {

    }

  })


  function handleSubmit(e: any) {
    e.preventDefault();
    formik.handleSubmit()
  }

  return (
    <Box
      component={'form'}
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingBottom: '40px'
      }}>

      <TextField
        id='email'
        label='Email'
        sx={{ marginBottom: '20px' }}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        id='password'
        label='Password'
        sx={{ marginBottom: '20px' }}
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Typography>Forgot password? <Button>Restore</Button></Typography>

      <Button
        variant="outlined"
        size='large'
        type='submit'
      > Login </Button>

      <Typography sx={{ paddingTop: 3 }}>
        Don't have an account?
        <Button
          size='small'
          onClick={() => navigate('/auth/register')}
        >
          Sign Up
        </Button>
      </Typography>
    </Box>
  )
}

export default LoginScreen