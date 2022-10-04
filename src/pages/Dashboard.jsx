import React, {useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import Searchbar from "../components/Searchbar.jsx";
import Feed from "../components/Feed.jsx";
import ActivityBar from "../components/ActivityBar.jsx";
import MobileSettings from "../components/MobileSettings";
import SuggestedFollowers from "../components/SuggestedFollowers";
import Settings from "../components/Settings";
function Dashboard() {
  
  return (
    <div>
      <div className="md:hidden">
      <MobileSettings/>
      </div>
      <Settings/>
     
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
