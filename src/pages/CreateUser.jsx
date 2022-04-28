import React, { useEffect, useContext, useState } from 'react';
import { getObj } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../InfoContext';

const CreateUser = () => {
  let navigate = useNavigate();
  const userRule = useContext(InfoContext).getUserRule();
  const [user, setUser] = useState(null);
  console.log(userRule);

  useEffect(() => {
    const localData = getObj('data');
    if (!localData) navigate(`/`);
      if (userRule !== 'manager') {
        navigate(`/`);
      }
  }, []);
  return <div>CreateUser</div>;
};

export default CreateUser;
