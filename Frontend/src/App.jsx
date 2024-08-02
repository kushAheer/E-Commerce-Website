import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import LayoutPage from './Pages/LayoutPage'
import OtpVerifyPage from './Pages/OtpVerifyPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

	const router = createBrowserRouter([{
		path : '/',
		element : <LayoutPage />,
		children : [
			{path : '/', element : <HomePage />},
			{path : '/register', element : <RegisterPage />},
			{path : '/login', element : <LoginPage />},
			{path : '/otp-verify', element : <OtpVerifyPage />}
		]
	}])
  return (
    <>
		<RouterProvider router={router}/>
		<Toaster />
    </>
  )
}

export default App
