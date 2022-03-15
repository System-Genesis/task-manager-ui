import React from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const SelectList = ({ inputLabel, array, onChange, value }) => {
  return (
    <FormControl required sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-helper-label'>{inputLabel}</InputLabel>
      <Select
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        value={value}
        label={inputLabel}
        onChange={onChange}
      >
        {array.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectList;
