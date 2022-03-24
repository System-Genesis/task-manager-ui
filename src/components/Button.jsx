import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({fullWidth, txt, onClick, endIcon}) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      fullWidth={fullWidth}
      sx={{ m: 2 }}
      onClick={onClick}
      endIcon={endIcon}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
