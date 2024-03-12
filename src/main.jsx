import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route index element={<Home/>}></Route>
    <Route path='login' element={<Login/>} ></Route>
    <Route path='signup' element={<SignUp/>}></Route>
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
