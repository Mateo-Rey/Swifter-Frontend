import React from 'react'
import Story from './Story'
function Stories() {
    const storyList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <div className='flex space-x-4 bg-white border overflow-x-scroll justify-between w-full mx-1 rounded-lg scrollbar-thin scrollbar-thumb-gray-300 p-5  align-center'>
        {storyList.map(() => {
           return <Story />
        })}
    </div>
  )
}

export default Stories