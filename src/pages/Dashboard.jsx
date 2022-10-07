import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Feed from "../components/Feed.jsx";
import Modal from "../components/Modal";
import Header from "../components/Header";
function Dashboard() {
  const {currentUser} = useAuth()
  return (
    <>
    <div className="md:flex md:flex-col md:items-center">
    <Header/>
    <Feed/>
    <Modal/>
    </div>
    </>
  );
}

export default Dashboard;
