import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { clear } from '../utils/localStorage';
import Link from '@mui/material/Link';
import { getObj } from '../utils/localStorage';
import axios from 'axios';

const NavBar = () => {
  let navigate = useNavigate();
  const getusername = getObj('data')?.user?.username;
  const [userRole, setUserRole] = useState(false)

  const handleSignOutButton = () => {
    navigate('/');
    clear();
  };

  const handleCreateBUtton = () => {
    navigate('/create');
  };

  useEffect(() => {
    const localData = getObj('data');
    const userCheck = {
      username: localData?.user.username,
      password: localData?.user.password,
    };
    const checkUserRole = async () => {
      try {
        const res = await axios.post(
          'http://localhost:3020/users/checkuserrole',
          userCheck
        );
        setUserRole(res.data)
      } catch (e) {}
    };
    checkUserRole()  
  }, []);

  return (
    <AppBar position='static' color='default' elevation={5} sx={{ mb: 5 }}>
      <Toolbar>
        <Typography
          variant='h6'
          sx={{ flexGrow: 1, '&:hover': { cursor: 'pointer', opacity: '0.9' } }}
          fontWeight='bold'
          color='primary'
          textTransform='capitalize'
        >
          <Link href='/button' underline='none'>
            hello {getusername}
          </Link>
        </Typography>
        {userRole === true && (
          <>
            <Button
              variant='contained'
              size='small'
              sx={{
                mr: 2,
                bgcolor: '#ef5350',
                '&:hover': { bgcolor: '#ef5350', opacity: 0.9 },
              }}
            >
              Create button
            </Button>
            <Button
              color='secondary'
              variant='contained'
              size='small'
              onClick={handleCreateBUtton}
              sx={{ mr: 2 }}
            >
              create user
            </Button>
          </>
        )}
        <Button
          color='primary'
          variant='contained'
          size='small'
          onClick={handleSignOutButton}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
