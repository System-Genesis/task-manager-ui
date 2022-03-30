import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DateInput = ({onChange, value, renderInput}) => {
//   const [selectedDate, setSelectedDate] = useState(new Date('2022-03-28'));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label='Choose Date'
        value={value}
        inputFormat='dd/MM/yyyy'
        // onChange={(newValue) => {
        //   setSelectedDate(newValue);
        // }}
        onChange={onChange}
        // renderInput={(params) => <TextField {...params} />}
        renderInput={renderInput}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
