/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState, useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import Pages from '../components/Pages';
import NavBar from '../components/NavBar';
import { InfoContext } from '../InfoContext';
// import Logo from '../components/Logo';

const Manager = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { setInfo } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    const localData = getObj('data');
    if (!localData) {
      navigate(`/`);
    } else {
      setUser(localData.user);
      setInfo(localData.data);
    }
  }, []);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };


  return !user ? (
    <p>loading...</p>
  ) : (
    <>
      <NavBar signInUser={user?.rule} />
      <Container>
        <Pages />
      </Container>
      {/* <Logo /> */}
      <button style={{width: '550px', height: '300px', marginLeft: '20px',          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',}}         onClick={handleClick}
          ></button>
    </>
  );
};

export default Manager;
