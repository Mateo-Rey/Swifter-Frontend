import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
    <div>
        <div className='mt-4'>
            <Stories/>
            <Posts/>
        </div>
    </div>
  )
}

export default Feed