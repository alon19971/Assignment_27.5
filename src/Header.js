import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { FaUserAlt } from 'react-icons/fa'; // Example icon

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaUserAlt style={{ fontSize: '30px', color: 'green' }} />
        <h1>{userName ? `Welcome, ${userName}` : 'Welcome'}</h1>
      </div>
    </header>
  );
};

export default Header;
