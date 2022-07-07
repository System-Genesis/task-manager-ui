import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx'
import { Container, Table } from '@mui/material';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const EditUser = () => {
  const [usernameAndRole, setUsernameAndRole] = useState([]);

  const getUsernameAndRoles = async () => {
    try {
      const usernameAndRoles = await axios.get(
        `${process.env.REACT_APP_BECKEND_URL}/users/usernameandroles`
      );
      setUsernameAndRole(usernameAndRoles.data);
      console.log(usernameAndRole);
    } catch (err) {
      Navigate(`/button`);
    }
  };

  useEffect(() => {
    getUsernameAndRoles();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Table
          rows={[{ username: usernameAndRole.username, role: usernameAndRole.role}]}
          headersTitles={['Usernames', 'Role', 'Edit']}
        />
      </Container>
    </>
  );
};

export default EditUser;
