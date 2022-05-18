import React, { useState, useEffect } from 'react';
import StepperNumber from './StepperNumber';
import Box from '@mui/material/Box';
import SubmitButton from './Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import axios from 'axios';

export const AddPages = () => {
  const [isActive, setIsActive] = useState(false);
  const [btns, setBtns] = useState([]);

  useEffect(() => {
    const res =  axios.get()
    
  }, []);

  //   const handleClick = () => {
  //     // 👇️ toggle
  //     setIsActive((current) => !current);

  //     // 👇️ or set to true
  //     // setIsActive(true);
  //   };

  const handleClick = () => {};

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 110px 80px 110px',
        }}
      >
        <StepperNumber active={1} />
        <SubmitButton
          color={'warning'}
          txt={'Add Page'}
          onClick={handleClick}
          endIcon={<AddCircleOutlineOutlinedIcon />}
        />
        {/* <button
          style={{
            width: '550px',
            height: '300px',
            marginLeft: '20px',
            backgroundColor: isActive ? 'salmon' : '',
            color: isActive ? 'white' : '',
          }}
          onClick={handleClick}
        ></button> */}
      </Box>
    </>
  );
};
