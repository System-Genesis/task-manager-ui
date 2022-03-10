import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({fullWidth, href, txt, onClick}) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      fullWidth={fullWidth}
      sx={{ m: 2, }}
      href={href}
      onClick={onClick}
    >
      {txt}
    </Button>
  );
};

export default SubmitButton;
