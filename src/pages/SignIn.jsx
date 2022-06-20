import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '../components/Input';
import SubmitButton from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setObj } from '../utils/localStorage';
import PasswordInput from '../components/PasswordInput';

const useStyles = makeStyles({
  box: {
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typographyError: {
    color: 'red',
    marginTop: '16px',
  },
});

const SignIn = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState({ username: false, password: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ username: false, password: false });

    error.username = !user.username;
    error.password = !user.password;

    if (error.username || error.password) {
      setError({ ...error });
    } else {
      try {
        const res = await axios.post('http://localhost:3020/login', user);
        setObj('data', res.data);
        console.log(res.data);
        navigate('/button');
      } catch (error) {
        setError({ username: true, password: true });
      }
    }
  };

  const handleUserChange = (e, key) => {
    e.preventDefault();
    setUser({ ...user, [key]: e.target.value });
    setError({ ...error, [key]: false });
  };

  return (
    <Container maxWidth='xs'>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box className={classes.box}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            sx={{ mb: 3, fontWeight: 'bold', textTransform: 'uppercase' }}
            variant='h4'
          >
            traking
          </Typography>
          <Input
            label={'username'}
            fullWidth={true}
            onChange={(e) => handleUserChange(e, 'username')}
            error={error.username}
          />
          <div style={{ marginTop: '8px' }} />
          <PasswordInput
            sx={{ mt: 1 }}
            label={'Password'}
            fullWidth={true}
            onChange={(e) => handleUserChange(e, 'password')}
            error={error.password}
          />
          <div style={{ marginTop: '7px', marginBottom: '7px' }} />
          {/* <Box sx={{ my: 0.7 }} /> */}
          {(error.username || error.password) && (
            <Typography variant='h7' className={classes.typographyError}>
              username or Password Incorrect
            </Typography>
          )}
          <SubmitButton margin={2} txt={'submit'} fullWidth={true} />
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
