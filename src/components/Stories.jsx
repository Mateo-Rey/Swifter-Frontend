import React from "react";
import Story from "./Story";
function Stories() {
  const storyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="flex md:max-w-[890px] space-x-4 bg-white border rounded-lg overflow-x-scroll justify-between w-full mx-1 scrollbar-thin scrollbar-thumb-gray-300 p-2 h-48  align-center">
      {storyList.map(() => {
        return <Story />;
      })}
    </div>
  );
}

export default Stories;
