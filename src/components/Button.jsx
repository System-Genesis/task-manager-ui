import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = () => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      fullWidth
      sx={{ mt: 4 }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
