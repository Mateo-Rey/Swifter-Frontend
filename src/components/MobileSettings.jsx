import React, {useState} from 'react'
import {TiMessages} from 'react-icons/ti'
import {TbSearch} from 'react-icons/tb'
import {IoMdPerson} from 'react-icons/io'
function Settings() {
    const [showSidebar, setShowSidebar] = useState(false);
  return ( 
    <>
    {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-7 top-0 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed fill-white md:fill-blue-600  z-30 flex items-center cursor-pointer left-3 top-2"
          viewBox="0 0 100 80"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div
      className={`top-0 w-10 bg-blue-400 md:w-48 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-y-full"
      }`}
    >
      <div className='flex flex-col fixed left-5 top-[100px]'>
      <button className='my-8'>
        <TiMessages size={35}/>
      </button>
      <button className='my-8'>
      <TbSearch size={35}/>
      </button>
      <button className='my-8'>
        <IoMdPerson size={35}/>
      </button>
      </div>
      
      
    </div>
    </>
  )
}


export default Settings