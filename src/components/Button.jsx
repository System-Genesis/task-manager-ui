import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ fullWidth, txt, onClick, endIcon, width, margin, size, icon, color, bgcolor}) => {
  return (
    <Button
      type='submit'
      variant='contained'
      fullWidth={fullWidth}
      sx={{ m: margin, textTransform: 'capitalize' ,width:width, bgcolor:bgcolor}}
      onClick={onClick}
      endIcon={endIcon}
      size={size}
      icon={icon}
      color= {color}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
