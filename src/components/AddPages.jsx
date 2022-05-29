import React, { useState, useEffect } from 'react';
import StepperNumber from './StepperNumber';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import SubmitButton from './Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Input from './Input'

export const AddPages = ({ next }) => {
  const [btns, setBtns] = useState([]);
  const [pages, setPages] = useState([[]]);
  const [currPage, setCurrPage] = useState(0);

  const getBTnsTitle = async () => {
    try {
      const btnsTitle = await axios.get('http://localhost:3020/buttons/title');
      setBtns(btnsTitle.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBTnsTitle();
  }, []);

  const choosePage = (i) => setCurrPage(i);

  const handleAddPage = () => {
    setPages([...pages, []]);
    console.log(pages);
  };

  const chooseBtn = (btn) => {
    const newPages = [...pages];
    newPages[currPage].push(btn);
    setPages(newPages);
    setBtns(btns.filter(({ _id }) => _id !== btn._id));
  };

  const unChooseBtn = (btn, pageNumber) => {
    const newPages = [...pages];
    newPages[pageNumber] = newPages[pageNumber].filter(
      ({ _id }) => _id !== btn._id
    );
    setPages(newPages);
    setBtns([...btns, btn]);
  };

  const deletePage = (pageNumber) => {
    const newPages = [...pages];
    setPages(pages.filter((page, i) => pageNumber !== i));
    setBtns([...btns, ...newPages[pageNumber]]);
    setCurrPage(0);
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
        <StepperNumber active={1} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Input color={'info'} label={'Page name'} helperText={'Enter the name of the page'} />
          <Button
            color='warning'
            variant='contained'
            onClick={handleAddPage}
            endIcon={<AddCircleOutlineOutlinedIcon />}
            sx={{ ml: 2, mt: 2, textTransform: 'capitalize', height: '5vh' }}
          >Add Page
          </Button>
        </Box>
      </Box>
      <Grid container>
        <Grid item lg={5} md={5}
          sm={6}
        >
          <Typography
            variant='h6'
            sx={{
              color: '#607d8b',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Buttons
          </Typography>
          <Paper
            elevation={5}
            variant='elevation'
            sx={{
              mx: 3,
              mt: 1,
              mb: 3,
              borderRadius: '10px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxHeight: '37vh',
                overflow: 'auto',
              }}
            >
              {btns?.map((btn, i) => (
                <>
                  <Grid key={i} item>
                    <SubmitButton
                      margin={1}
                      width={'15vw'}
                      size={'small'}
                      color={'info'}
                      txt={btn.title}
                      onClick={() => chooseBtn(btn)}
                    ></SubmitButton>
                  </Grid>
                </>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          lg={7}
          md={7}
          sm={12}
          sx={{
            height: '48vh',
            overflow: 'auto',
          }}
        >
          <Grid container>
            {pages.map((page, pageIndex) => (
              <Grid item lg={6} md={6} key={pageIndex}>
                <Paper
                  onClick={() => choosePage(pageIndex)}
                  elevation={5}
                  variant='elevation'
                  sx={{
                    width: '80%',
                    height: '38vh',
                    m: 2,
                    borderRadius: '10px',
                    alignItems: 'center',
                    overflow: 'auto',
                    border: `3px solid  ${pageIndex === currPage ? 'lightBlue' : 'white'
                      }`,
                  }}
                >
                  <IconButton onClick={() => deletePage(pageIndex)}>
                    <DeleteIcon color={'error'} />
                  </IconButton>
                  {page.map((btn, btnIndex) => (
                    <>
                      <Grid
                        key={btnIndex}
                        item
                        lg={12}
                        sx={{ textAlign: 'center' }}
                      >
                        <SubmitButton
                          size={'small'}
                          margin={1}
                          width={'90%'}
                          color={'info'}
                          txt={btn.title}
                          onClick={() => unChooseBtn(btn, pageIndex)}
                        ></SubmitButton>
                      </Grid>
                    </>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

// {/* <button
//     style={{
//       width: '550px',
//       height: '300px',
//       marginLeft: '20px',
//       backgroundColor: isActive ? 'salmon' : '',
//       color: isActive ? 'white' : '',
//     }}
//     onClick={handleClick}
//   ></button> */}
