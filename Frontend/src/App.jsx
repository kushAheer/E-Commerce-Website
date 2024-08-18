import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import LayoutPage from './Pages/LayoutPage'
import OtpVerifyPage from './Pages/OtpVerifyPage'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AdminLayouPage from './Pages/AdminLayouPage'
import AdminPage from './Pages/AdminPage'
import CreateProduct from './Components/Products/CreateProduct'
import CreateCategory from './Components/Category/CreateCategory'
import CreateSubCategory from './Components/Category/CreateSubCategory'
import { useSelector } from 'react-redux'
import ProductPage from './Pages/ProductPage'
import ProductLayoutPage from './Pages/ProductLayoutPage'
import ProductDetailPage from './Pages/ProductDetailPage'


function App() {
  	const [count, setCount] = useState(0)

	const user  = useSelector(state => state.users.user)
	const token = useSelector(state => state.users.token)

	const router = createBrowserRouter([{
		path : '/',
		element : <LayoutPage />,
		children : [
			{path : '/', element : <HomePage />},
			{path : '/register', element : <RegisterPage />},
			{path : '/login', element : <LoginPage />},
			{path : '/otp-verify', element : <OtpVerifyPage />},
			{	
				path : '/product', 
				element : <ProductLayoutPage />,
				children :  [
					{path : '', element : <ProductPage />},
				]

			},
			{path : '/product/:slug', element : <ProductDetailPage />},
			{
				path : '/admin',
				element : user?.role == "admin" ?  <AdminLayouPage /> : <Navigate to={"/"} />,
				children : [
					{path : '', element : <AdminPage />},
					{path : 'products', element : <h1>Products</h1>},
					{path : 'orders', element : <h1>Orders</h1>},
					{path : 'product/create' , element : <CreateProduct/>},
					{path : 'category', element : <h1>Category</h1>},
					{path : 'category/create', element : <CreateCategory/>},
					{path : 'subcategory/create', element : <CreateSubCategory/>},
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
