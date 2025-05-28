import React, { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Pages/components/Header';
import UserContext from './utils/UserContext';

function App() {
  //authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: 'SubhanBasha' };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <>
        <Header />
        <Outlet />
      </>
    </UserContext.Provider>
  );
}

export default App;