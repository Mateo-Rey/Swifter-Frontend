import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {BiHome} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {CgAddR} from 'react-icons/cg'
import {MdOutlineExplore} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import { useAuth } from "../contexts/AuthContext";
function Header() {
    const {setIsLoggedIn, isLoggedIn} = useAuth()
  return (
    <div className="border-b fixed w-full flex justify-around shadow-sm bg-white">
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
        
    </div>
  );
}

export default Header;
