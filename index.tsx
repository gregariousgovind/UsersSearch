import React from 'react';
import { render } from 'react-dom';
import UserFinder from './src/components/UserFinder';
import UsersContext from './store/users-context';
import './style.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

render(<App />, document.getElementById('root'));
