import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const {googleLogin, currentUser} = useAuth()
  console.log(currentUser)
  return (
    <>
    <button onClick={googleLogin}>Login</button>
    </>
  )
}

export default Login