import React from 'react';
import { useLocation } from 'react-router-dom';
import Routing from './Routes/Routing';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar based on the current path */}
      {location.pathname !== '/' && <Navbar />}
      <Routing />
    </>
  );
};

export default App;
