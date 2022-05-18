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

const useStyles = makeStyles({});
const { REACT_APP_BECKEND_URL } = process.env;

const SignIn = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [user, setUser] = useState({ team: '', password: '' });
  const [error, setError] = useState({ team: false, password: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.team && user.password) {
      try {
        const res = await axios.post(`${REACT_APP_BECKEND_URL}/login`, user);
        setObj('data', res.data);
        console.log(res.data);
        navigate('/button');
      } catch (error) {
        setError({ team: true, password: true });
      }
    } else {
      setError({ team: !user.team, password: !user.password });
    }
  };

  return (
    <Container maxWidth='xs'>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 15,
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
              if (error.team) {
                setError({ ...error, team: false });
              }
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
              variant='h7'
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
