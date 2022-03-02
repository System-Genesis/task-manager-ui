import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = ({signInUser}) => {
  return (
    <AppBar position='static' color='default' elevation={5} sx={{mb:8}} >
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }} fontWeight= 'bold' color='primary' textTransform='capitalize'>
          hello {signInUser}
        </Typography>
        <Button color='primary' variant='contained' size= 'medium'>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
