import React from 'react'
import Header from '../components/Header'
import ChatRoom from '../components/ChatRoom'
import ContactBar from '../components/ContactBar'
function DirectMessages() {
  return (
    <div>
      <Header/>
      
      <div className='fixed left-0 top-12 w-full h-full flex md:flex-row'>
      
      <ContactBar/>
      <ChatRoom/>
      </div>
    </div>
  )
}

export default DirectMessages