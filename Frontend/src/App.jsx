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
import AdminLayouPage from './Pages/AdminLayouPage'
import AdminPage from './Pages/AdminPage'
import CreateProduct from './Components/Products/CreateProduct'

function App() {
  const [count, setCount] = useState(0)

	const router = createBrowserRouter([{
		path : '/',
		element : <LayoutPage />,
		children : [
			{path : '/', element : <HomePage />},
			{path : '/register', element : <RegisterPage />},
			{path : '/login', element : <LoginPage />},
			{path : '/otp-verify', element : <OtpVerifyPage />},
			{
				path : '/admin',
				element : <AdminLayouPage />,
				children : [
					{path : '', element : <AdminPage />},
					{path : 'products', element : <h1>Products</h1>},
					{path : 'orders', element : <h1>Orders</h1>},
					{path : 'product/create' , element : <CreateProduct/>}
				]

			}
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
