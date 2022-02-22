import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
const Manager = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = getObj('data');
    setUser(localUser);

    if (!localUser) navigate(`/login`);
  }, []);

  return (
    <Container>
      <h1>Hello {user.name}</h1>
      <h2>You are {user.rule}</h2>
      <h3>your slave []</h3>

    </Container>
  );
};

export default Manager;
