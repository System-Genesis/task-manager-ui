import React, { useState, useEffect } from 'react';
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
  typographyHeader: {
    marginBottom: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  typographyError: {
    color: 'red',
    marginTop: '16px',
  },
});

const SignIn = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState({ userName: '', password: '' });
  const [error, setError] = useState({ userName: false, password: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ userName: false, password: false });

    error.userName = !user.userName;
    error.password = !user.password;

    if (error.userName || error.password) {
      setError({ ...error });
    } else {
      try {
        const res = await axios.post('http://localhost:3020/login', user);
        setObj('data', res.data);
        navigate('/button');
      } catch (error) {
        setError({ userName: true, password: true });
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
          <Typography className={classes.typographyHeader} variant='h4'>
            traking
          </Typography>
          <Input
            label={'Username'}
            fullWidth={true}
            onChange={(e) => handleUserChange(e, 'userName')}
            error={error.userName}
          />
          <Box sx={{ mt: 1 }} />
          <PasswordInput
            label={'Password'}
            fullWidth={true}
            onChange={(e) => handleUserChange(e, 'password')}
            error={error.password}
          />
          <Box sx={{ my: 0.7 }} />
          {(error.userName || error.password) && (
            <Typography variant='h7' className={classes.typographyError}>
              Username or Password Incorrect
            </Typography>
          )}
          <SubmitButton margin={2} txt={'submit'} fullWidth={true} />
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
