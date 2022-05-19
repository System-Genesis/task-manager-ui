import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ fullWidth, txt, onClick, endIcon, color ,width, margin}) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color={color}
      fullWidth={fullWidth}
      sx={{ m: margin, textTransform: 'capitalize' ,width:width}}
      onClick={onClick}
      endIcon={endIcon}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
