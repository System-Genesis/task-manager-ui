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

const useStyles = makeStyles({});

const SignIn = ({ label, OnChange }) => {
  const classes = useStyles();
  const [user, setUser] = useState({ team: '', password: '' });
  const [error, setError] = useState({ team: false, password: false });

  const handleError = () => {
    if (user.team === '') {
      setError({ ...error, team: true });
    }
    if (user.password === '') {
      setError({ ...error, password: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ team: false, password: false });

    console.log(user);

    handleError();

    console.log(error);
    if (!error.team && !error.password) {
      try {
        const res = await axios.post('http://localhost:3002/api/login', user);
        console.log(res.data);
        console.log('data');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container maxWidth='xs'>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold', textTransform: 'uppercase' }}>
            traking
          </Typography>
          <Input
            label={(label = 'Username')}
            OnChange={(e) => {
              e.preventDefault();
              setUser({ ...user, team: e.target.value });
            }}
            error={error.team}
          />
          <Input
            label={(label = 'Password')}
            OnChange={(e) => {
              e.preventDefault();
              setUser({ ...user, password: e.target.value });
            }}
            error={error.password}
          />
          <SubmitButton />
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
