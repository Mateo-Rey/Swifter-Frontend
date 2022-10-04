import React, {useState} from 'react'
import {TiMessages} from 'react-icons/ti'
function Settings() {
    const [showSidebar, setShowSidebar] = useState(false);
  return ( 
    <>
    {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-4 top-0 z-50"
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
      className={`top-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-y-full"
      }`}
    >
      <TiMessages/>
    </div>
    </>
  )
}


export default Settings