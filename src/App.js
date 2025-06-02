import React, { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Pages/components/Header';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  //authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: 'SubhanBasha' };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Header />
          <Outlet />
        </>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;