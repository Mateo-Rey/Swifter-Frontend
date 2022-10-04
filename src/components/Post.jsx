import React from 'react'

function Post() {
  return (
    <div className='mt-4 bg-gray-300 rounded border-2-gray-300 flex flex-col items-center justify-between min-w-[300px] w-[40vw] h-[60vh] md:h-[70vh]'>
        <div className='flex relative rounded-t top-0 bg-gray-500 h-10 w-full'>
        top bar
        </div>
        <div className='w-64 h-80 md:h-96 md:w-96 bg-blue-200'>
            img frame
        </div>
        <div className='flex my-2'>
            action bar
        </div>
    </div>
  )
}

export default Post