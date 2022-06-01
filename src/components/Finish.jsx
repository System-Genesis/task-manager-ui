import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Paper } from '@mui/material';
import StepperNumber from './StepperNumber';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Finish = ({ info, back }) => {
  let navigate = useNavigate();
  const [active, setActive] = useState(2);

  const backButton = (e) => {
    e.preventDefault();
    back();
  };

  const finishButton = () => {
    setActive(3);
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: 'You Create the user succesfully',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/button');
        console.log(info);
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 110px 10px 110px',
        }}
      >
        <StepperNumber active={active} />
        <Grid
          container
          sx={{ justifyContent: 'space-between' }}
          style={{ padding: '10px 0px' }}
        >
          <Grid item>
            <Button
              variant='contained'
              onClick={backButton}
              sx={{
                textTransform: 'capitalize',
                bgcolor: '#546e7a',
                '&:hover': { bgcolor: '#546e7a', opacity: 10 },
              }}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              onClick={finishButton}
              sx={{
                textTransform: 'capitalize',
                bgcolor: '#546e7a',
                '&:hover': { bgcolor: '#546e7a', opacity: 10 },
              }}
            >
              Finish
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item lg={5} md={5}>
          <Typography
            color='#00897b'
            variant='h4'
            sx={{ textTransform: 'none', fontFamily: 'Roboto Mono, monospace' }}
          >
            Name <DoubleArrowIcon sx={{ color: '#c0ca33' }} />{' '}
            {info?.user?.name}
          </Typography>
          <Typography
            color='#00897b'
            variant='h4'
            sx={{ textTransform: 'none', fontFamily: 'Roboto Mono, monospace' }}
          >
            Rule <DoubleArrowIcon sx={{ color: '#c0ca33' }} />{' '}
            {info?.user?.rule}
          </Typography>
          <Typography
            color='#00897b'
            variant='h3'
            sx={{
              mt: 4,
              textTransform: 'none',
              fontFamily: 'Roboto Mono, monospace',
            }}
          >
            Pages <DoubleArrowIcon sx={{ color: '#c0ca33' }} />
          </Typography>
        </Grid>
        <Grid
          item
          lg={7}
          md={7}
          sx={{ overflow: 'auto', m: '0 auto', height: '48vh' }}
        >
          <Grid container>
            {info?.pages?.map((page, pageIndex) => (
              <>
                <Grid item lg={6} md={6} key={pageIndex}>
                  <Paper
                    elevation={1}
                    variant='elevation'
                    sx={{
                      width: '210px',
                      height: '38vh',
                      m: 2,
                      borderRadius: '5px',
                      // alignItems: 'center',
                      overflow: 'auto',
                      bgcolor: '#deddd4',
                    }}
                  >
                    <Typography
                      variant='h5'
                      sx={{
                        color: '#455a64',
                        fontFamily: 'Roboto Mono, monospace',
                        textDecoration: 'underline',
                        margin: '0 auto',
                        width: 'fit-content',
                        fontWeight: 'bold',
                      }}
                    >
                      {page.title}
                    </Typography>
                    {page?.buttons.map((btn, btnIndex) => (
                      <>
                        <Grid
                          key={btnIndex}
                          item
                          lg={12}
                          sx={{ textAlign: 'center' }}
                        >
                          <Button
                            variant='contained'
                            size='small'
                            sx={{
                              textTransform: 'none',
                              width: '90%',
                              mt: 1,
                              bgcolor: '#cda597',
                              '&:hover': { bgcolor: '#cda597' },
                            }}
                          >
                            {btn?.title}
                          </Button>
                        </Grid>
                      </>
                    ))}
                  </Paper>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Finish;
