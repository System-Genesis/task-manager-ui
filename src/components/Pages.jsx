import React, { useContext } from 'react';
import { Box, Paper, Typography, Grid, Tooltip } from '@mui/material';
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
    maxHeight: '60vh',
    margin: '24px',
    borderRadius: '20px',
    alignItems: 'center',
    overflow: 'auto',
  },
  typographyHeader: {
    textAlign: 'center',
    marginTop: '12px',
    fontWeight: 'bold',
    marginBottom: '24px',
    textTransform: 'capitalize',
    fontFamily: 'Roboto Mono, monospace',

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
          <Grid key={pageIndex} item xs={11} sm={9} md={6} lg={6}>
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
                  <Tooltip key={i} placement='top-start' title={btn.toolTip} arrow>
                    <div>
                      <SubmitButton
                        key={i}
                        onClick={() => {
                          changeBtn(pageIndex, i);
                          navigate(
                            `/action?pageTitle=${info[pageIndex].title}&btnTitle=${info[pageIndex].btns[i].title}`
                          );
                        }}
                        fullWidth={false}
                        txt={btn?.title}
                        margin={'12px'}
                        padding={'6px'}
                        width={'145px'}
                        height={'60px'}
                        marginTop={'5px'}
                      />
                    </div>
                  </Tooltip>
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
