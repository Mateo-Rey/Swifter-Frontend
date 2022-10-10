import React from "react";

function ChatRoom() {
  const user1Messages = [1, 2, 3, 4, 5, 6, 7];
  const user2Messages = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-gradient-to-tr px-2 flex justify-between from-indigo-400 via-blue-600 to-indigo-600 shadow-md w-full">
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
  );
}

export default ChatRoom;
