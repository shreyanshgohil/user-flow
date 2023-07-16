import React, { createContext, useContext, useState } from 'react';

const INITIAL_STATE = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  contactNo: '',
  companies: '',
};

const UserContext = createContext({
  user: INITIAL_STATE,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserDataHandler = (userData) => {
    setUser(userData);
  };
  return (
    <UserContext.Provider value={{ user, setUserDataHandler }}>
      {children}
    </UserContext.Provider>
  );
};
