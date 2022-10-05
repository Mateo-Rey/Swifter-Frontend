import React, {useState} from 'react'
import {TiMessages} from 'react-icons/ti'
import {TbSearch} from 'react-icons/tb'
import {IoMdPerson} from 'react-icons/io'

function Settings() {
  return (
    <div
      className={`top-0 w-10 bg-blue-400 md:w-48 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 invisible md:visible`}
    >
      <div className='flex flex-col fixed left-5 top-[100px]'>
        <button className='flex flex-row'>
      <div className='my-8'>
        <TiMessages size={35}/>
      </div>
      <p className='py-10 pl-3 font-bold text-xl'>Messages</p>
      </button>
      <button className='flex'>
      <div className='my-8'>
      <TbSearch size={35}/>
      </div>
      <p className='font-bold text-xl py-10 pl-3'>Explore</p>
      </button>
      <button className='flex'>
      <div className='my-8'>
        <IoMdPerson size={35}/>
      </div>
      <p className='py-10 pl-3 font-bold text-xl'>Profile</p>
      </button>
      
      </div>
      
      
    </div>
  )
}

export default Settings