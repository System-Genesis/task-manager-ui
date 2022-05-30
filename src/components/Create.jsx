import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '../components/Input';
import SubmitButton from '../components/Button';
import PasswordInput from '../components/PasswordInput';
import RadiosGroup from '../components/RadiosGroup';
import { Grid } from '@mui/material';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import StepperNumber from './StepperNumber';

export const Create = ({ setNewUser, next }) => {
  const [user, setUser] = useState({
    name: '',
    password: '',
    rule: 'user',
    confirm: '',
  });
  const [error, setError] = useState({
    name: false,
    password: false,
    confirm: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ name: false, password: false, confirm: false });
    error.name = !user.name;
    error.password = !user.password;
    if (error.password) {
      error.confirm = false;
    } else {
      error.confirm = !user.confirm;
      if (user.password !== user.confirm) {
        error.confirm = true;
        setUser({ ...user, confirm: '' });
      }
    }

    if (error.name || error.password || user.password !== user.confirm) {
      setError({ ...error });
    } else {
      try {
        delete user.confirm;
        setNewUser(user);
        next();
      } catch (error) {
        setError({ name: true, password: true });
      }
    }
  };

  const handleUserChange = (e, key) => {
    e.preventDefault();
    setUser({ ...user, [key]: e.target.value });
    setError({ ...error, [key]: false });
  };

  const errorMsg = (msg) => (
    <>
      <ErrorOutlinedIcon
        sx={{ position: 'relative', top: '5px' }}
        fontSize='small'
        color='error'
      />
      <Typography
        variant='h7'
        sx={{
          color: 'red',
        }}
      >
        {msg}
      </Typography>
    </>
  );
  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 110px 80px 110px',
        }}
      >
        <StepperNumber active={0} />
        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
        <LockOutlinedIcon />
      </Avatar> */}
        <Typography
          variant='h4'
          sx={{ mb: 3, fontWeight: 'bold', textTransform: 'uppercase', color: '#4e342e'}}
        >
          Create User
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Input
              label={'Username'}
              fullWidth={true}
              OnChange={(e) => handleUserChange(e, 'name')}
              error={error.name}
            />
            {error.name && errorMsg('Enter a Username')}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <PasswordInput
              fullWidth={true}
              label={'Password'}
              onChange={(e) => handleUserChange(e, 'password')}
              error={error.password}
            />
            {error.password
              ? errorMsg('Enter a Password')
              : user.password.length > 0 &&
                user.password.length < 8 &&
                !error.password &&
                errorMsg('Use 8 characters or more for your password')}
            {error.confirm &&
              user.password.length >= 8 &&
              errorMsg('Those passwords didn’t match. Try again.')}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <PasswordInput
              value={user.confirm}
              fullWidth={true}
              label={'Confirm Password'}
              onChange={(e) => handleUserChange(e, 'confirm')}
              error={error.confirm}
            />
          </Grid>
          <Grid item xs={12} sx={{mb: 1}}>
            <RadiosGroup
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, rule: e.target.value });
              }}
            />
          </Grid>
        </Grid>
        <SubmitButton margin={3} txt={'Next'} width='20%' />
      </Box>
    </form>
  );
};

export default Create;
