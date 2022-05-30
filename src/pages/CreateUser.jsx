import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
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
  const [pages, setPages] = useState([]);

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
  const back = () => {
    setStage(stage - 1);
  }

  return (
    <>
      {
        <>
          <NavBar />
          <Container
            maxWidth='md'
            sx={{
              mt: 10,
              border: '1px solid #dadce0',
              borderRadius: '8px',
              height: '68vh',
              overflow: 'hidden',
              backgroundColor: '#f3f7f0'
            }}
          >
            <SwipeableViews index={stage}>
              <Create next={next} setNewUser={setUser} />
              <AddPages next={next} back={back} setNewPages={setPages} />
              <p onClick={() => {}}>good</p>
            </SwipeableViews>
          </Container>
        </>
      }
    </>
  );
};

export default CreateUser;
