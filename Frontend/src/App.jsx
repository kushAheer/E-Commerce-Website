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
import ProductDetailPage, { productDetailsLoader } from './Pages/ProductDetailPage'
import CartPage from './Pages/CartPage'
import Profilepage from './Pages/Profilepage'

import AddressCreate from './Components/Cart/AddressCreate'
import ShoppingList from './Components/Cart/ShoppingList'
import AddressPage, { AddressPageLoader } from './Pages/AddressPage'
import CheckOut from './Pages/CheckOut'
import AdminProductList from './Components/Admin/AdminProductList'
// import AddressPage from './Pages/AddressPage'


function App() {
  	const [count, setCount] = useState(0)

	const user  = useSelector(state => state.users.user)
	const address = useSelector(state => state.address.item)

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
			{path : '/product/:slug', element : <ProductDetailPage /> , loader : productDetailsLoader},
			// {path : '/category', element : <h1>Category</h1>},
			{path :'/profile',element : user ?  <Profilepage/> : <Navigate to={"/login"} />},
			{path : '/cart',
			element :user ?  <CartPage />  : <Navigate to={"/login"} />,
			children :[
				{path :'' ,element : <ShoppingList/>},
				{path : 'address', element : <AddressPage/>  , loader :AddressPageLoader},
				{path : 'checkout', element : <CheckOut/>},
			]},
			{path : '/cart/createAddress', element : user ? <AddressCreate/> : <Navigate to={"/login"} />},
			{
				path : '/admin',
				element : user?.role == "admin" ?  <AdminLayouPage /> : <Navigate to={"/"} />,
				children : [
					{path : '', element : <AdminPage />},
					{path : 'product/create' , element : <CreateProduct/>},
					{path : 'orders', element : <h1>Orders</h1>},
					{path : 'category/create', element : <CreateCategory/>},
					{path : 'subcategory/create', element : <CreateSubCategory/>},
					{path : 'product/edit/:id', element : <CreateProduct/>},
					{path : 'product', element : <AdminProductList/>},
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
