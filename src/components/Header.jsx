import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {BiHome} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {CgAddR} from 'react-icons/cg'
import {MdOutlineExplore} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import { useAuth } from "../contexts/AuthContext";
function Header() {
    const {logout, googleLogin, isLoggedIn} = useAuth()
  return (
    <div className="border-b scroll-smooth px-2 fixed top-1 md:top-0 w-full flex justify-around shadow-sm bg-white">
            <div className="hidden w-96 h-11 mt-1 sm:flex relative">
          <div className="absolute w-6 ml-1 h-full flex items-center">
            <AiOutlineSearch size={50} />
          </div>
          <input
            className="h-10 w-full rounded-md bg-[#efefef] pl-8 outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
            <div className="flex justify-around w-[80vw] my-1">
            <button>
            <BiHome size={30}/>
            </button>
            <button>
                <TbMessageCircle2 size={30}/>
            </button>
            <button>
                <CgAddR size={30}/>
            </button>
            <button>
                <MdOutlineExplore size={30}/>
            </button>
            <button>
                <AiOutlineHeart size={30}/>
            </button>
            <button>

            </button>
            </div>
            <div className="flex -translate-y-0.5 md:-translate-x-3 text-blue-500">
            {isLoggedIn ? <button onClick={logout}>Sign Out</button>: <button onClick={googleLogin}>Login</button>}
            </div>
        
    </div>
  );
}

export default Header;
