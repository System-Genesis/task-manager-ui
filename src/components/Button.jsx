import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ fullWidth, txt, onClick, endIcon, color ,width, margin, size, icon}) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color={color}
      fullWidth={fullWidth}
      sx={{ m: margin, textTransform: 'capitalize' ,width:width}}
      onClick={onClick}
      endIcon={endIcon}
      size={size}
      icon={icon}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
