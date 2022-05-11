import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadiosGroup = ({ onChange }) => {
  return (
    <FormControl>
      <FormLabel>Rule</FormLabel>
      <RadioGroup onChange={onChange} row defaultValue='manager'>
        <FormControlLabel value='manager' control={<Radio />} label='manager' />
        <FormControlLabel value='user' control={<Radio />} label='user' />
      </RadioGroup>
    </FormControl>
  );
};

export default RadiosGroup;
