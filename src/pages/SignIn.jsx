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
import { setObj, getObj } from '../utils/localStorage';
import PasswordInput from '../components/PasswordInput';

const useStyles = makeStyles({});

const SignIn = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState({ team: '', password: '' });
  const [error, setError] = useState({ team: false, password: false });

  // useEffect(() => {
  //   const localUser = getObj('data');
  //   setUser(localUser);

  //   if (localUser) navigate(`/${localUser.rule}`);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ team: false, password: false });

    error.team = !user.team;
    error.password = !user.password;

    if (error.team || error.password) {
      setError({ ...error });
    } else {
      try {
        const res = await axios.post('http://localhost:3020/login', user);
        setObj('data', res.data);
        console.log(res.data);

        navigate(`/${res.data.rule}`);
      } catch (error) {
        setError({ team: true, password: true });
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
          <Typography
            variant='h4'
            sx={{ mb: 3, fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            traking
          </Typography>
          <Input
            label={'Username'}
            fullWidth={true}
            OnChange={(e) => {
              e.preventDefault();
              setError({ ...error, team: false });
              setUser({ ...user, team: e.target.value });
            }}
            error={error.team}
          />
          <PasswordInput
            onChange={(e) => {
              e.preventDefault();
              setError({ ...error, password: false });
              setUser({ ...user, password: e.target.value });
            }}
            error={error.password}
          />
          {(error.team || error.password) && (
            <Typography
              variant='h6'
              sx={{
                color: 'red',
                mt: 3,
              }}
            >
              Username or Password Incorrect
            </Typography>
          )}
          <SubmitButton txt={'submit'} fullWidth={true} />
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
