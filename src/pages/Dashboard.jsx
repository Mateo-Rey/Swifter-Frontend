import React, {useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import Searchbar from "../components/Searchbar.jsx";
import Feed from "../components/Feed.jsx";
import ActivityBar from "../components/ActivityBar.jsx";
import MobileSettings from "../components/MobileSettings";
import SuggestedFollowers from "../components/SuggestedFollowers";
function Dashboard() {
  
  return (
    <div>
      <MobileSettings/>
     
      <div className="flex justify-start justify-self-center items-center scroll-smooth flex-col">
        <Searchbar />
        <Feed />
        <ActivityBar />
      </div>
      <SuggestedFollowers />
    </div>
  );
}

export default Dashboard;
