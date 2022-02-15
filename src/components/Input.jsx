import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ label, OnChange, error }) => {

  return (
    <TextField
      variant='outlined'
      label={label}
      fullWidth
      required
      margin='dense'
      onChange={OnChange}
      error={error}
    >
    </TextField>
  );
};

export default Input;
