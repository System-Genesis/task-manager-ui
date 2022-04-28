import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { clear } from '../utils/localStorage';
import Link from '@mui/material/Link';
import { InfoContext } from '../InfoContext';

const NavBar = () => {
  const userRule = useContext(InfoContext).getUserRule();
  let navigate = useNavigate();

  const handleSignOutButton = () => {
    navigate('/');
    clear();
  };
  const handleCreateBUtton = () => {
    navigate('/create');
  }
  return (
    <AppBar position='static' color='default' elevation={5} sx={{ mb: 5 }}>
      <Toolbar>
        <Typography
          variant='h6'
          sx={{ flexGrow: 1 }}
          fontWeight='bold'
          color='primary'
          textTransform='capitalize'
        >
          <Link href='/button' underline='none'>
            hello {userRule}
          </Link>
        </Typography>
        {userRule === 'manager' ? (
          <Button
            color='secondary'
            variant='contained'
            size='small'
            onClick={handleCreateBUtton}
            sx={{ mr: 2 }}
          >
            create user
          </Button>
        ) : (
          <></>
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
