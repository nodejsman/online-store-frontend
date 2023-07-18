import { Box, TextField, Button, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';


function RegisterScreen() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      confirmPassword: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
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
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)} 
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id='username'
        label='username'
        sx={{ marginBottom: '20px' }}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.touched.username && Boolean(formik.errors.username)} 
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        id='password'
        label='Password'
        sx={{ marginBottom: '20px' }}
        onBlur={formik.handleBlur}
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)} 
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        id='confirmPassword'
        label='Password'
        sx={{ marginBottom: '20px' }}
        onBlur={formik.handleBlur}
        type='password'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)} 
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />

      <Button variant="outlined" size='large' type='submit' >Register</Button>
      <Typography sx={{ paddingTop: 3 }}>
        Already have an account?
        <Button
          size='small'
          onClick={() => navigate('/auth/login')}
        >
          Sign In
        </Button>
      </Typography>
    </Box>
  )
}

export default RegisterScreen