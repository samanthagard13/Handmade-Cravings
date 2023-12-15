import { useState } from 'react'
import './App.css'
import CustomNav from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomNav/>
      <HomePage/>
    </>
  )
}

export default App
