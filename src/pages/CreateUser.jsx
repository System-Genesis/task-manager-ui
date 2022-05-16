import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { getObj } from '../utils/localStorage';
import NavBar from '../components/NavBar';
import Create from '../components/Create';

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
    console.log(stage );
    setStage(stage + 1);
  };

  const getStage = {
    1: <Create next={next} setNewUser={setUser}/>,
    2: <p onClick={() => setStage(stage + 1)}>stage 2</p>,
    3: <p onClick={() =>{}}>good</p>,
  };

  return (
    <>
      {
        <>
          <NavBar signInUser={'dsfsdf'} />

          <Container
            maxWidth='md'
            sx={{ mt: 10, border: '1px solid #dadce0', borderRadius: '8px' }}
          >
            {getStage[stage]}
          </Container>
        </>
      }
    </>
  );
};

export default CreateUser;
