/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState, useContext } from 'react';
import Container from '@mui/material/Container';
import { useNavigate, useLocation } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import Pages from '../components/Pages';
import NavBar from '../components/NavBar';
import { InfoContext } from '../InfoContext';
import Logo from '../components/Logo';

const Button = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const { setInfo } = useContext(InfoContext);

  useEffect(() => {
    const localData = getObj('data');
    if (!localData) {
      navigate(`/`);
    } else {
      const currentLocatin = location.pathname
      if(currentLocatin !== '/button') {
        navigate(`/button`)
      }
      setUser(localData.user);
      setInfo(localData.data);
      
    }
  }, []);

  return !user ? (
    <p>loading...</p>
  ) : (
    <>
      <NavBar />
      <Container>
        <Pages />
      </Container>
      <Logo />
    </>
  );
};

export default Button;
