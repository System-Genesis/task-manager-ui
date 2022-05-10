import React, { useState, useEffect, useContext } from 'react';
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

const CreateUser = () => {
  let navigate = useNavigate();
  const userRule = useContext(InfoContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState({ team: false, password: false });
  const { setInfo } = useContext(InfoContext);

  // useEffect(() => {
  //   const localData = getObj('data');
  //   if (!localData) {
  //     navigate(`/`);
  //   } else {
  //     setUser(localData.user);
  //     setInfo(localData.data);
  //     console.log(localData.data);
  //     if (localData.data[0].rule !== 'manager') {
  //       console.log('4');
  //       navigate(`/`);
  //     }
  //   }
  // }, []);

  return (
    <Container maxWidth='xs'>
      <form noValidate autoComplete='off' onSubmit>
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

export default CreateUser;
