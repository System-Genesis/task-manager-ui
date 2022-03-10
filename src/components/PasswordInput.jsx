import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const PasswordInput = ({onChange, error}) => {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        onChange(event);
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <FormControl sx={{ m: 1 }} required fullWidth variant="outlined" error={error}>
    <InputLabel >Password</InputLabel>
    <OutlinedInput
      type={values.showPassword ? 'text' : 'password'}
    //   value={values.password}
      onChange={handleChange('password')}
      endAdornment={
        <InputAdornment>
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
  </FormControl>
  )
}

export default PasswordInput
