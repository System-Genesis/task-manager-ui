import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Area = () => {
  const a = [{pageNum: 1, title: 'Post'}, {pageNum: 2, title: 'Get'}]; 
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'center',
      }}
    >
      {a.map((obj) => (
        <Paper
          elevation={10}
          variant='elevation'
          sx={{ minWidth: '28vw', height: '70vh', m: 2, borderRadius: '20px' }}
        ><Typography variant='h5' sx={{textAlign: 'center', pt: 2, fontWeight: 'bold', }}>{obj.title}</Typography></Paper>
      ))}
    </Box>
  );
};

export default Area;
