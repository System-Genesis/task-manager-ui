import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import NavBar from '../components/NavBar';
import Create from '../components/Create';
import { AddPages } from '../components/AddPages';

const CreateUser = () => {
  let navigate = useNavigate();

  const [stage, setStage] = useState(1);
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
    1: <Create next={next} setNewUser={setUser} />,
    2: <AddPages />,
    3: <p onClick={() => { }}>good</p>,
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px 110px 80px 110px',
              }}
            >
              {getStage[stage]}
            </Box>
          </Container>
        </>
      }
    </>
  );
};

export default CreateUser;
