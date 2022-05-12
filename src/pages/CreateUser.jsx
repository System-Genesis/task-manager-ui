import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '../components/Input';
import SubmitButton from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import PasswordInput from '../components/PasswordInput';
import { InfoContext } from '../InfoContext';
import RadiosGroup from '../components/RadiosGroup';
import NavBar from '../components/NavBar';
import { Grid } from '@mui/material';

const CreateUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    password: '',
    rule: '',
    confirm: '',
  });
  const [error, setError] = useState({
    name: false,
    password: false,
    confirm: false,
  });

  useEffect(() => {
    const localData = getObj('data');
    if (!localData) navigate(`/`);
    // if (userRule !== 'manager') {
    // navigate(`/`);
    // }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ team: false, password: false, confirm: false });

    error.name = !user.name;
    error.password = !user.password;
    error.confirm = !user.confirm;

    if (error.team || error.password) {
      setError({ ...error });
    }
    else if (user.password !== user.confirm) {
      setError({ confirm: true });
    }
     else {
      try {
        // const res = await axios.post('http://localhost:3020/users', user);
        console.log('sdfsdf');
      } catch (error) {
        setError({ name: true, password: true, confirm: true });
      }
    }
  };

  return (
    <>
      <NavBar signInUser={user?.rule} />
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
              Create User
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  label={'Username'}
                  fullWidth={true}
                  OnChange={(e) => {
                    e.preventDefault();
                    setUser({ ...user, name: e.target.value });
                    setError({ ...error, name: false });
                  }}
                  error={error.name}
                />
                {error.name && (
                  <Typography
                    variant='h7'
                    sx={{
                      color: 'red',
                      mt: 4,
                    }}
                  >
                    Enter Username
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <PasswordInput
                  fullWidth={true}
                  label={'Password'}
                  onChange={(e) => {
                    e.preventDefault();
                    setUser({ ...user, password: e.target.value });
                    setError({ ...error, password: false });
                  }}
                  error={error.password}
                />
                {error.password && (
                  <Typography
                    variant='h7'
                    sx={{
                      color: 'red',
                      mt: 2,
                    }}
                  >
                    Enter Password
                  </Typography>
                )}
                {error.confirm && (
                  <Typography
                    variant='h7'
                    sx={{
                      color: 'red',
                      mt: 2,
                    }}
                  >
                    Those passwords didn’t match. Try again.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <PasswordInput
                  fullWidth={true}
                  label={'Confirm Password'}
                  onChange={(e) => {
                    e.preventDefault();
                    setUser({ ...user, confirm: e.target.value });
                    setError({ ...error, confirm: false });
                  }}
                  error={error.confirm}
                />
              </Grid>
              <Grid item xs={12}>
                <RadiosGroup
                  onChange={(e) => {
                    e.preventDefault();
                    setUser({ ...user, rule: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <SubmitButton txt={'Next'} fullWidth={true} />
          </Box>
        </form>
      </Container>
    </>
  );
};

export default CreateUser;
