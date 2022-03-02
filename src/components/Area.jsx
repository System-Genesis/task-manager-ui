import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SubmitButton from './Button';

const Area = () => {
  const areas = [
    {
      pageNum: 1,
      title: 'Post',
      btns: [
        {
          title: 'post by Id & source',
          href: 'https://www.youtube.com/',
        },
      ],
    },
    {
      pageNum: 2,
      title: 'Get',
      btns: [{ title: 'get by Id & source', href: 'https://mui.com/api/button/' }],
    },
  ];
  return (
    <Grid container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '0 auto',
          justifyContent: 'center',
        }}
      >
        {areas.map((obj) => (
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              elevation={10}
              variant='elevation'
              sx={{
                minWidth: '28vw',
                minHeight: '70vh',
                m: 3,
                borderRadius: '20px',
                alignItems: 'center',
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {obj.btns.map((b) => (
                  <SubmitButton href={b.href} fullWidth={false} txt={b.title} />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

export default Area;
