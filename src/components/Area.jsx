import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Area = () => {
  const areas = [
    { pageNum: 1, title: 'Post' },
    { pageNum: 2, title: 'Get' },
  ];
  return (
    <Grid container >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto',
          justifyContent: 'center',
        }}
      >
        {areas.map((obj) => (
          <Grid item xs={12} md={8} lg={6}>
            <Paper
              elevation={10}
              variant='elevation'
              sx={{
                minWidth: '28vw',
                height: '70vh',
                m: 3,
                borderRadius: '20px',
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  textAlign: 'center',
                  pt: 2,
                  fontWeight: 'bold',
                  color: 'secondary.light',
                }}
              >
                {obj.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

export default Area;
