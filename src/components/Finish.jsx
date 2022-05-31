import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import StepperNumber from './StepperNumber';
import SubmitButton from './Button';

const Finish = ({ info, back }) => {
  const backButton = (e) => {
    e.preventDefault();
    back();
  };

  return (
    <>
      {' '}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 110px 10px 110px',
        }}
      >
        <StepperNumber active={2} />
        <Grid
          container
          sx={{ justifyContent: 'space-between' }}
          style={{ padding: '10px 0px' }}
        >
          <Grid item>
            <Button
              variant='contained'
              onClick={backButton}
              sx={{ textTransform: 'capitalize', bgcolor: '#546e7a', '&:hover': { bgcolor: '#546e7a', opacity: 10 },}}
            >
              Back
            </Button>
          </Grid>
        </Grid>
        <Typography variant='h4'>name</Typography>
        <Typography variant='h4'>{info?.user?.name}</Typography>
        <Typography>rule: {info?.user?.rule}</Typography>
        {info?.pages.map((page) => {
          return <></>;
        })}
      </Box>
    </>
  );
};

export default Finish;
