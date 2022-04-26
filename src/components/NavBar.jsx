import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { clear } from '../utils/localStorage';
import Link from '@mui/material/Link';

const NavBar = ({ signInUser }) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    clear();
  };
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
            hello {signInUser}
          </Link>
        </Typography>
       
        <Button
          color='primary'
          variant='contained'
          size='medium'
          onClick={handleClick}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
