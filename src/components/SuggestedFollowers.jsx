import React from "react";
import MiniProfile from "./MiniProfile";

function SuggestedFollowers() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
  return (
    <div className="md:visible invisible fixed rounded-l top-0 right-0 bg-gradient-to-b from-emerald-600  to-blue-400  backdrop-blur-2xl h-full w-72">
      <div className="h-[99vh] overflow-scroll rounded md:w-[280px] left-1 relative top-1 bg-white/40">
        <h1 className="text-white  font-bold text-2xl text-center">
          Suggested Followers
        </h1>
        <div className="grid grid-cols-2">
          {data?.map((profile) => {
            return <MiniProfile profile={profile} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SuggestedFollowers;
