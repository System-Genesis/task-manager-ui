import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Area = () => {
  const areas = [
    { pageNum: 1, title: 'Post' },
    { pageNum: 2, title: 'Get' },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'center',
      }}
    >
      {areas.map((obj) => (
        <Paper
          elevation={10}
          variant='elevation'
          sx={{ minWidth: '28vw', height: '70vh', m: 3, borderRadius: '20px' }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              pt: 2,
              fontWeight: 'bold',
              color: 'primary.light',
            }}
          >
            {obj.title}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Area;
