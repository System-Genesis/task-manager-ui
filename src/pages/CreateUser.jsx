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

const CreateUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({ name: '', password: '', rule: '' });

  useEffect(() => {
    const localData = getObj('data');
    if (!localData) navigate(`/`);
    // if (userRule !== 'manager') {
    // navigate(`/`);
    // }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3020/users', user);
    console.log(user);
    console.log(res);
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
              Sign up
            </Typography>
            <Input
              label={'Username'}
              fullWidth={true}
              OnChange={(e) => {
                e.preventDefault();
                setUser({ ...user, name: e.target.value });
              }}
            />
            <PasswordInput
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, password: e.target.value });
              }}
            />
            <RadiosGroup
              onChange={(e) => {
                e.preventDefault();
                setUser({ ...user, rule: e.target.value });
              }}
            />
            <SubmitButton txt={'Sign Up'} fullWidth={true} />
          </Box>
        </form>
      </Container>
    </>
  );
};

export default CreateUser;
