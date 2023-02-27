import React from "react";
// import '../App.css'
// import Footer from "./components/Footer";
import Sidebar from "./Sidebar";
import Topbar from './Topbar';
import GetData from './GetData';
import ScheduleWater from './ScheduleWater'
import Profile from './Profile';
import BackPage from '../components/BackPage';
import Contactus from './Contactus'
import Configure from './Configure';
import SupplyList from './SupplyList';
import Dashboard from "./Dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mysidebar">
    <div class=" bg-gradient-primary">
      <Sidebar />
      </div>
      <main className="content ">
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/user/details" element={<div>User Details</div> } />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/getdata" element={<GetData/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/schedule" element={<ScheduleWater/>} />
        <Route path="/supplyList" element={<SupplyList/>} />
        <Route path="/configure" element={<Configure/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
