import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import RegisterPage from '../pages/RegisterPage'
import CheckEmailPage from '../pages/CheckEmailPage'
import CheckPasswordPage from '../pages/CheckPasswordPage'
import HomePage from '../pages/HomePage'
import ChatSection from '../components/ChatSection'
import AuthLayout from '../layouts/AuthLayout'

const router = createBrowserRouter([
{
  path : "/",
  element : <App/>,
  children : [
    {
        path : "register",
        element : <AuthLayout><RegisterPage/></AuthLayout>,
    },
    {
        path : "email",
        element : <AuthLayout><CheckEmailPage/></AuthLayout>,
    },
    {
        path : "password",
        element : <AuthLayout><CheckPasswordPage/></AuthLayout>
    },
    {
        path : "",
        element : <HomePage/>,
        children:[
            {
                path : ":userId",
                element : <ChatSection/>
            }
        ]
    }
  ]
}
])

export default router