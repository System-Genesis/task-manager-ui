/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import Pages from '../components/Pages';
import NavBar from '../components/NavBar';

const Manager = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = getObj('data');
    setUser(localUser);
    if (!localUser || localUser.rule !== 'manager') navigate(`/`);
  }, []);

  return !user ? (
    <p>loading...</p>
  ) : (
    <>
      <NavBar signInUser={user?.rule} />
      <Container>
        <Pages />
      </Container>
    </>
  );
};

export default Manager;
