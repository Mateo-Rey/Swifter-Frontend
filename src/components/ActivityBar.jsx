import React from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RiHeartFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { FaChartLine } from "react-icons/fa";
function ActivityBar() {
  return (
    <div className="bg-emerald-500 z-50 justify-between rounded px-5 z-100 md:px-3 py-1 flex h-10 md:w-[650px] w-96 fixed bottom-0">
      <TiHome fill="#FFFFFF" size={35} />
      <MdOutlineLibraryAdd fill="#FFFFFF" size={35} />
      <RiHeartFill fill="#FFFFFF" size={35} />
      <FaChartLine className="fill-white" size={35} />
    </div>
  );
}

export default ActivityBar;
