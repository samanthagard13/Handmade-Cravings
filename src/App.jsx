import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from './Routes';
function App() {
  return (
    <>
      <Router>
        <NavRoutes />
      </Router>
    </>
  );
}

export default App;
