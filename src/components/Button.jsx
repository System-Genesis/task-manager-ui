import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ fullWidth, txt, onClick, endIcon, color }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color={color}
      fullWidth={fullWidth}
      sx={{ m: 2, textTransform: 'capitalize' }}
      onClick={onClick}
      endIcon={endIcon}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
