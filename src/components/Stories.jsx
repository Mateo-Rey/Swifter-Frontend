import React from 'react'
import Story from './Story'
function Stories() {
    const storyList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <div className='flex justify-between w-full overflow-scroll align-center'>
        {storyList.map(() => {
           return <Story />
        })}
    </div>
  )
}

export default Stories