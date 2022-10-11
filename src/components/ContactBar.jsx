import React from 'react'

function ContactBar() {
    const following = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  return (
    <div className='flex bg-gradient-to-bl p-2 flex-col from-indigo-500 to-purple-500 shadow-sm h-full w-96'>
        <div className='bg-white/30 flex px-2 h-[42rem]  w-full rounded'>
            <div className='flex w-full flex-col overflow-scroll items-center scroll-smooth '>
            {following?.map((user) => {
                return (
                    <button className=' w-64 bg-gradient-to-br shadow-sm my-2 rounded-lg'><p className='text-white px-2 font-semibold text-lg'>{user}</p></button>
                )
            })}
            </div>
            
        </div>
    </div>
  )
}

export default ContactBar