/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import Area from '../components/Area';

const Manager = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = getObj('data');
    setUser(localUser);
    if (!localUser || localUser.rule !== 'manager') navigate(`/login`);
  }, []);

  return !user ? (
    <p>loading...</p>
  ) : (
    <Container>
      <h1>Hello {user?.name}</h1>
      <h2>You are {user?.rule}</h2>
      
      <Area />
    </Container>
  );
};

export default Manager;
