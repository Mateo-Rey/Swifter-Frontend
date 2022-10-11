import React from "react";
import logo from '../assets/DefaultLogo.png'
function ChatRoom() {
  const user1Messages = [1, 2, 3, 4, 5, 6, 7];
  const user2Messages = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-gradient-to-tr px-2 hidden md:flex flex-col justify-between from-indigo-400 via-blue-600 to-indigo-600 shadow-md w-full">
      <div className=" p-2 space-x-2 rounded flex self-center h-24 mt-2 justify-around items-center bg-slate-500">
        <div className="h-12 w-12">
        <img src={logo} className="rounded-full" alt="mini profile"/>
        </div>
        <p className="font-bold text-white font-lg">Username</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="ml-4 mt-10 space-y-16">
          {user2Messages?.map((message) => {
            return (
              <div className="">
                <div className="px-2 rounded-md my-5 bg-neutral-500 flex">
                  <p className="font-semibold text-white text-lg">{message}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-16">
          {user1Messages?.map((message) => {
            return (
              <div className="">
                <div className="px-2 rounded-md my-5 mx-2 bg-neutral-500 flex">
                  <p className="font-semibold text-white text-lg">{message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
