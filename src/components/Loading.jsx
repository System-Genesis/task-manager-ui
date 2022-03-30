import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = ({ variant }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <CircularProgress variant={variant} color='secondary'/>
    </Box>
  );
};

export default Loading;
