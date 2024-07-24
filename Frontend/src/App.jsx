import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import LayoutPage from './Pages/LayoutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LayoutPage />      
    </>
  )
}

export default App
