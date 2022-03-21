import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({fullWidth, txt, onClick}) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      fullWidth={fullWidth}
      sx={{ m: 2 }}
      onClick={onClick}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
