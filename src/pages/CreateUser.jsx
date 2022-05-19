import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import NavBar from '../components/NavBar';
import Create from '../components/Create';
import { AddPages } from '../components/AddPages';
import SwipeableViews from 'react-swipeable-views';


const CreateUser = () => {
  let navigate = useNavigate();

  const [stage, setStage] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    const localData = getObj('data');
    if (!localData) navigate(`/`);
    // if (userRule !== 'manager') {
    // navigate(`/`);
    // }
  }, []);

  const next = () => {
    setStage(stage + 1);
  };

  const getStage = {
    0: <Create next={next} setNewUser={setUser} />,
    1: <AddPages next={next} />,
    2: <p onClick={() => { }}>good</p>,
  };

  const handleChange = (index) => (e) => {
    setStage={index}
  };

  return (
    <>
      {
        <>
          <NavBar />
          <Container
            maxWidth='md'
            sx={{ mt: 10, border: '1px solid #dadce0', borderRadius: '8px' }}
          >
            <SwipeableViews index={stage} onChangeIndex={handleChange}>
              {getStage[stage]}
              </SwipeableViews>
          </Container>
        </>
      }
    </>
  );
};

export default CreateUser;
