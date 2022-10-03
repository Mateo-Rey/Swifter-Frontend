import React from 'react'
import { useAuth } from '../contexts/AuthContext'
function Dashboard() {
  const {logout} = useAuth()
  return (
    <button onClick={logout}>Log out</button>
  )
}

export default Dashboard