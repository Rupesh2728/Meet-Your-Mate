import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import ChatSection from '../components/ChatSection'
import AuthLayout from '../layouts/AuthLayout'
import ForgotPassword from '../pages/ForgotPassword'
import CheckEmailPage from '../pages/Login/CheckEmailPage'
import CheckPasswordPage from '../pages/Login/CheckPasswordPage'

const router = createBrowserRouter([
{
  path : "/",
  element : <App/>,
  children : [
    {
        path : "register",
        element : <RegisterPage/>,
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
        path : "forgot-password",
        element : <AuthLayout><ForgotPassword/></AuthLayout>
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