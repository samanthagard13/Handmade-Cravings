import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from './Routes'; // Assuming this handles routing

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
