import React, { useContext, useState, useEffect } from 'react';
import Input from '../components/Input';
import NavBar from '../components/NavBar';
import SubmitButton from '../components/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { InfoContext } from '../InfoContext';
import SelectList from '../components/Select';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import { teal } from '@mui/material/colors';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';

export const Action = () => {
  const primary = teal[500];
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [params, setParams] = useState({});
  // const [source, setSource] = useState('');
  const [btn] = useState(useContext(InfoContext).getBtn());
  const reqType = useContext(InfoContext).getTypeReq();
  const [dataToShow, setDataToShow] = useState(null);

  useEffect(() => {
    const localUser = getObj('data');
    setUser(localUser);
    if (!localUser || localUser.rule !== 'manager') navigate(`/`);
  }, []);

  const buildUrl = (par, url) => {
    Object.keys(par).map((param) => {
      url = url.replace(`:${param}`, par[param]);
    });
    return url;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const url = buildUrl(params, btn.name);
      const res = await axios.post('http://localhost:3020/action', {
        url,
        reqType,
      });
      console.log(res.data);
      setDataToShow(res.data);
    } catch (error) {}
  };

  return (
    <div>
      <NavBar signInUser={user?.rule} />
      <Typography
        variant='h4'
        align='center'
        color={primary}
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        הכנס את הערכים
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {btn.params &&
          Object.keys(btn.params).map((par, i) => {
            if (typeof btn.params[par] == 'string') {
              return (
                <Input
                  label={par}
                  key={i}
                  OnChange={(e) => {
                    setParams({ ...params, [par]: e.target.value });
                    // console.log(params);
                  }}
                />
              );
            }
            return (
              <SelectList
                key={i}
                inputLabel={par}
                array={['', ...btn.params[par]]}
                value={params[par] ? params[par] : ''}
                onChange={(e) => {
                  setParams({ ...params, [par]: e.target.value });
                  // console.log(params);
                }}
              />
            );
          })}
        <Box sx={{ mt: 2 }}>
          {btn.message && <Typography variant='h5'>{btn.message}</Typography>}
        </Box>
        <SubmitButton
          endIcon={<SendIcon />}
          txt={'Send'}
          onClick={handleClick}
        />
      </Box>
      <Box sx={{ ml: 5 }}>
        <JSONPretty
          id='json-pretty'
          data={dataToShow && `${JSON.stringify(dataToShow)}`}
        ></JSONPretty>
      </Box>
    </div>
  );
};

export default Action;
