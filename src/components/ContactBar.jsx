import React from 'react'

function ContactBar() {
    const following = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  return (
    <div className='hidden md:flex bg-gradient-to-bl p-2 flex-col from-indigo-500 to-purple-500 shadow-sm h-full w-96'>
        <div className='bg-white/30 flex px-2 h-[42rem] w-full rounded'>
            <div className='flex w-full flex-col overflow-scroll scroll-smooth '>
            {following?.map((user) => {
                return (
                    <div className=' w-64 bg-gradient-to-br shadow-sm my-2 rounded-lg'><p className='text-white font-semibold text-lg'>{user}</p></div>
                )
            })}
            </div>
            
        </div>
    </div>
  )
}

export default ContactBar