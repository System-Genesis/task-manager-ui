import React, { useState, useEffect } from 'react';
import StepperNumber from './StepperNumber';
import { Box, Grid, Paper, Typography } from '@mui/material';
import SubmitButton from './Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from 'axios';

export const AddPages = ({ next }) => {
  const [isActive, setIsActive] = useState(false);
  const [btns, setBtns] = useState([]);

  const getBTnsTitle = async () => {
    try {
      const btnsTitle = await axios.get('http://localhost:3020/buttons/title');
      console.log(btnsTitle.data);
      setBtns(btnsTitle.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBTnsTitle();
  }, []);

  //   const handleClick = () => {
  //     // 👇️ toggle
  //     setIsActive((current) => !current);

  //     // 👇️ or set to true
  //     // setIsActive(true);
  //   };

  const handleClick = () => {
    console.log(btns);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 110px 20px 110px',
        }}
      >
        <StepperNumber active={1} />
        <SubmitButton
          color={'warning'}
          txt={'Add Page'}
          onClick={handleClick}
          endIcon={<AddCircleOutlineOutlinedIcon />}
        />
      </Box>
      <Grid container>
        <Paper
          elevation={5}
          variant='elevation'
          sx={{
            m: 3,
            borderRadius: '10px',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxHeight: '30vh',
              overflow: 'scroll'
            }}
          >
            <Typography>Buttons</Typography>
            {btns.map((btn, i) => (
              <>
                <Grid key={i} item >
                  <SubmitButton margin={1} color={'info'} txt={btn.title}></SubmitButton>
                </Grid>
              </>
            ))}
          </Box>
        </Paper>
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
