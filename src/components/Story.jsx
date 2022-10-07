import React from "react";
import avatar from '../assets/DefaultLogo.png'
function Story() {
    const username="SwifterTeamMedia"
  return (
    <div className="mt-16 w-20 flex flex-col justify-start">
      <img alt="avatar" className="rounded-full h-20 w-20 p-[1.5px] self-center border-3px border-[3px] border-red-500" src={avatar} />
    <p className="truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
