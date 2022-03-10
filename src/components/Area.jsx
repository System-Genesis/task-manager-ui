/* eslint-disable no-undef */
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { InfoContext } from '../InfoContext'

import SubmitButton from './Button';

const Area = () => {
  const [info, setInfo] = useContext(InfoContext)

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
        {info.map((obj) => (
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
                {obj.btns.map((btn) => (
                  <SubmitButton href={btn.href} onClick={() => setInfo()} fullWidth={false} txt={btn.title} />
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
