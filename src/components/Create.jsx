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
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

export const Create = ({setNewUser, next}) => {
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
        console.log('a');
        error.name = !user.name;
        error.password = !user.password;
        if (error.password) {
          error.confirm = false;
          console.log('b');
        } else {
          error.confirm = !user.confirm;
          console.log('c');
          if (user.password !== user.confirm) {
            error.confirm = true;
            setUser({ ...user, confirm: '' });
            console.log('d');
          }
        }
    
        if (error.name || error.password || user.password !== user.confirm) {
          setError({ ...error });
          console.log('e');
        } else {
          try {
            console.log('ghfghf');
            // const res = await axios.post('http://localhost:3020/users', user);
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
        padding: '80px 110px',
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
        <Grid item xs={12}>
          <RadiosGroup
            onChange={(e) => {
              e.preventDefault();
              setUser({ ...user, rule: e.target.value });
            }}
          />
        </Grid>
      </Grid>
      <SubmitButton txt={'Next'} width='30%' />
    </Box>
  </form>
  )
}

export default Create;
