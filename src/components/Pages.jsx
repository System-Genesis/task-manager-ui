import React, { useContext } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { InfoContext } from '../InfoContext';
import SubmitButton from './Button';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    justifyContent: 'center',
  },
  paper: {
    minWidth: '28vw',
    minHeight: '60vh',
    margin: '24px',
    borderRadius: '20px',
    alignItems: 'center',
  },
  typographyHeader: {
    textAlign: 'center',
    paddingTop: '16px',
    fontWeight: 'bold',
  },
  pages: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

const Pages = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const { info, changeBtn } = useContext(InfoContext);

  return (
    <Grid container>
      <Box className={classes.box}>
        {info.map((obj, pageIndex) => (
          <Grid key={pageIndex} item xs={10} md={6} lg={6}>
            <Paper elevation={10} variant='elevation' className={classes.paper}>
              <Typography
                variant='h4'
                className={classes.typographyHeader}
                sx={{ color: 'secondary.light' }}
              >
                {obj.title}
              </Typography>
              <Box className={classes.pages}>
                {obj.btns.map((btn, i) => (
                  <SubmitButton
                    key={i}
                    onClick={() => {
                      changeBtn(pageIndex, i);
                      navigate('/action');
                    }}
                    fullWidth={false}
                    txt={btn?.title}
                    margin={2}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

export default Pages;
