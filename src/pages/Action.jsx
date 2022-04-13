/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

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
import { getObj, setObj } from '../utils/localStorage';
import { teal, grey } from '@mui/material/colors';
import axios from 'axios';
import Loading from '../components/Loading';
import buildRequest from '../utils/buildRequest';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'react-json-pretty/themes/monikai.css';
import { JsonFormatter } from 'react-json-formatter';
import printToFile from '../utils/printToFile';
import MultipleSelect from '../components/MultipleSelect';

const Action = () => {
  const primary = teal[500];
  const greyColor = grey[600];
  let navigate = useNavigate();
  const reqType = useContext(InfoContext).getTypeReq();
  const [user, setUser] = useState(null);
  const [params, setParams] = useState({});
  const [btn] = useState(useContext(InfoContext).getBtn());
  const [dataToShow, setDataToShow] = useState(null);
  const [loading, setLoading] = useState('determinate');
  const [error, setError] = useState({});

  const JsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    colonStyle: { color: 'darkorange' },
  };

  useEffect(() => {
    const localData = getObj('data');
    if (!localData) navigate(`/`);
    setUser(localData.user);
  }, []);

  useEffect(() => {
    setLoading('determinate');
  }, [dataToShow]);

  const handleClick = async (e) => {
    e.preventDefault();
    const currError = {};

    Object.keys(btn.params).forEach((par) => (currError[par] = !params[par]));

    if (Object.values(currError).some((i) => i)) {
      setError({ ...currError });
    } else {
      try {
        setLoading('indeterminate');
        const request = buildRequest(params, btn.name, btn.type);
        console.log(request);
        const res = await axios.post('http://localhost:3020/action', {
          ...request,
          reqType,
        });
        if (res.data.length < 100) {
          if (res.data && !Array.isArray(res.data)) {
            setDataToShow([res.data]);
          } else {
            setDataToShow(res.data);
          }
        } else {
          printToFile(res.data);
          setLoading('determinate');
        }
      } catch (error) {
        setDataToShow([error.message]);
        setError({ ...error });
      }
    }
  };

  const handleCancelClick = () => {
    setLoading('determinate');
    setDataToShow(null);
  };

  return (
    <div>
      <NavBar signInUser={user?.rule} />
      <Typography
        variant='h4'
        align='center'
        color={greyColor}
        sx={{
          mb: 2,
          fontWeight: 'bold',
          textTransform: 'capitalize',
          textDecoration: 'underline',
        }}
      >
        {`${reqType} ${btn.title}`}
      </Typography>
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
            if (Array.isArray(btn.params[par])) {
              if (btn.select === 'select') {
                return (
                  <SelectList
                    key={i}
                    inputLabel={par}
                    array={['', ...btn.params[par]]}
                    value={params[par] ? params[par] : ''}
                    onChange={(e) => {
                      setParams({ ...params, [par]: e.target.value });
                      setError({ ...error, [par]: false });
                    }}
                    error={error[par]}
                  />
                );
              } else if (btn.select === 'multiple') {
                return (
                  <MultipleSelect
                    key={i}
                    inputLabel={par}
                    array={['', ...btn.params[par]]}
                    value={params[par] ? params[par] : []}
                    onChange={(e) => {
                      setParams({ ...params, [par]: e.target.value });
                      typeof params[par] === 'string'
                        ? params[par].split(',')
                        : params[par];
                      setError({ ...error, [par]: false });
                    }}
                    error={error[par]}
                  />
                );
              }
            }
            return (
              <Input
                label={par}
                type={btn.params[par]}
                key={i}
                OnChange={(e) => {
                  setParams({ ...params, [par]: e.target.value });
                  setError({ ...error, [par]: false });
                }}
                error={error[par]}
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
      {loading === 'indeterminate' ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Loading variant={loading}/>
          <SubmitButton
            txt={'cancel'}
            onClick={handleCancelClick}
            color={'info'}
          ></SubmitButton>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            margin: '0 auto',
            justifyContent: 'center',
          }}
        >
          {!dataToShow || dataToShow.length === 0 ? (
            <Typography
              variant='h5'
              color='error'
              sx={{
                p: 2,
                mt: 3,
              }}
            >
              - No Data To Show -
            </Typography>
          ) : (
            dataToShow.map((json, i) => {
              return (
                <Grid key={i} item xs={6} md={4} lg={4}>
                  <Paper
                    elevation={8}
                    variant='elevation'
                    sx={{
                      // minWidth: '25vw',
                      height: '93%',
                      m: 3,
                      p: 2,
                      borderRadius: '20px',
                      alignItems: 'center',
                    }}
                  >
                    {
                      <JsonFormatter
                        json={JSON.stringify(json, null, 2).replace(
                          /\//g,
                          ' /'
                        )}
                        tabWith='2'
                        JsonStyle={JsonStyle}
                      />
                    }
                  </Paper>
                </Grid>
              );
            })
          )}
        </Box>
      )}{' '}
    </div>
  );
};

export default Action;
