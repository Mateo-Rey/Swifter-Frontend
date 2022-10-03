import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Searchbar from '../components/Searchbar.jsx'
import Feed from '../components/Feed.jsx'
import ActivityBar from '../components/ActivityBar.jsx'
function Dashboard() {
  const {logout} = useAuth()
  return (
    <div className='flex flex-col'>
      <Searchbar/>
      <Feed/>
      <ActivityBar/>
      
    </div>
  )
}

export default Dashboard