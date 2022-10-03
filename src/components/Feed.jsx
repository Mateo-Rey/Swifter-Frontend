import React from 'react'
import Post from '../components/Post'
function Feed() {
  const data = [1,2,3,4,5]
  return (
    <div className='items-center justify-between flex flex-col'>
      {data?.map((e) => {
        return <Post key={e}/> 
      })}
    </div>
  )
}

export default Feed