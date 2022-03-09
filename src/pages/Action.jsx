import React, { useContext, useState, useEffect } from 'react';
import Input from '../components/Input';
import NavBar from '../components/NavBar';
import SubmitButton from '../components/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { InfoContext } from '../InfoContext';
import SelectList from '../components/Select';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import { teal } from '@mui/material/colors';

export const Action = () => {
  const [info, setInfo,index, setIndex] = useContext(InfoContext);

  const primary = teal[500];
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(index);

  useEffect(() => {
    const localUser = getObj('data');
    setUser(localUser);
    if (!localUser || localUser.rule !== 'manager') navigate(`/login`);
  }, []);
  const button1 = info[0].btns[1].params.source;
  return (
    <div>
      <NavBar signInUser={user?.rule} />
      <Typography
        variant='h4'
        align='center'
        color={primary}
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        הכנס את הערכים הרלוונטים
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {Object.keys(info[0].btns[index].params).map((par, i) => {
          console.log(typeof info[0].btns[index].params[par] == 'string' );
          if (typeof info[0].btns[index].params[par] == 'string') {
            return <Input label={par} key={i} />;
          }
          return <SelectList
            key={i}
            inputLabel={par}
            array={info[0].btns[index].params[par]}
          ></SelectList>;
        })}
        {/* <Input label={info[0].btns[index].params.identifiers} />
        {button1 && (
          <SelectList inputLabel={'source'} array={button1}></SelectList>
        )}
        <br /> */}
        <SubmitButton color={primary} txt={'Submit'} />
      </Box>
    </div>
  );
};

export default Action;
