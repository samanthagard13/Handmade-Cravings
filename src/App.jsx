import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import NavRoutes from './Routes';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from server:', error);
      });
  }, []);

  return (
    <>
    <Router>
      <NavRoutes/>
    </Router>
    </>
  )
}

export default App;

