import React, { useState } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const SelectList = ({ inputLabel, array }) => {
  const [currItem, setCurrItem] = useState('');
  const changeCurrItem = (event) => {
    setCurrItem(event.target.value);
  };
  
  return (
    <FormControl required sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-helper-label'>{inputLabel}</InputLabel>
      <Select
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        value={currItem}
        label={inputLabel}
        onChange={changeCurrItem}
      >
        {array.map((item) => (
           <MenuItem value={item.value}>{item.sourceName}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectList;
