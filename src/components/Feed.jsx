import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
function Feed() {
  return (
    <div>
        <div className='flex flex-col'>
            <Stories/>
            <Posts/>
        </div>
    </div>
  )
}

export default Feed