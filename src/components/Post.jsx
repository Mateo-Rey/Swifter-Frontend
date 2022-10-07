import React from "react";
import profilePic from "../assets/DefaultLogo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
function Post({ username, postPhoto, caption }) {
  return (
    <div className="flex-col items-center border w-full justify-between p-3">
      <div className="p-2 flex border justify-between shadow-sm items-center w-full">
        <div className="flex items-center">
          <div className="h-16 w-16 mr-3">
            <img
              src={profilePic}
              alt="profile picture"
              className="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-sm">{username}</p>
          </div>
        </div>
        <div className="h-6 w-6">
          <BsThreeDotsVertical size={25} />
        </div>
      </div>

      <div>
        <img src={profilePic} alt="post" />
      </div>
    </div>
  );
}

export default Post;
