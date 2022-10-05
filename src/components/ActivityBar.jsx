import React from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RiHeartFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import {GrLineChart} from 'react-icons/gr'
function ActivityBar() {
  return (
    <div className="bg-emerald-500 z-50 justify-between rounded px-5 z-100 md:px-2  py-1 flex h-10 md:w-[650px] w-96 fixed bottom-0">
      <MdOutlineLibraryAdd size={35} />
      <RiHeartFill size={35} />
      <TiHome size={35} />
      <GrLineChart size={35}/>
    </div>
  );
}

export default ActivityBar;
