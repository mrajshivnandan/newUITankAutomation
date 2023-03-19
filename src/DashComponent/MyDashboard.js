import React, { createContext, useEffect, useState } from 'react'
// import '../App.css'
// import Footer from "./components/Footer";
import Register from "../User Details/Register";
import Home from "../User Details/Home";
import Edit from "../User Details/Edit";
import Details from "../User Details/Details";

import Sidebar from "./Sidebar";
import Topbar from './Topbar';
import GetData from './GetData';
import ScheduleWater from './ScheduleWater'
import Profile from './Profile';
import Contactus from './Contactus'
import Configure from './Configure';
import SupplyList from './SupplyList';
import Dashboard from "./Dashboard";

import { Routes, Route, useNavigate} from "react-router-dom";
import { adminInfo } from '../utility/appdata';
import { loadAdminData } from '../utility/admin';

let initValue = {
  index: 0,
  upperTank: 0,
  lowerTank: 0,
  UTVolume: 0,
  LTVolume: 0,
  buildLed: false,
  motorOn: false,
  tankFull: false
}
export const EspContext = createContext("");
export const AdminContext = createContext("");
function MyDashboard() {
  const navigate = useNavigate();
  const [espData, setEspData] = useState(initValue);
  const [adminData, setAdminData] = useState(adminInfo);

  useEffect(() => {
    // if user is logged in then only allow else send user to login page
    if (!sessionStorage.getItem('loggedin')) {
        navigate('/login');
    }
    //getting asmin info after the page is loaded
    if (!adminInfo.creationdate) {
      loadAdminData()
          .then((data) => {
              if(data)
              setAdminData(data);
          })
    } else {
        setAdminData(adminInfo);
    }
    // console.log('about: ',about,'otherinfo ',otherinfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <AdminContext.Provider value= {{adminData,setAdminData}}>
    <EspContext.Provider value={{espData,setEspData}}>
    <div className="mysidebar">
    <div className=" bg-gradient-primary">
      <Sidebar />
      </div>
      <main className="content ">
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/users" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/users/edit/:id" element={<Edit />} />
        <Route path="/users/view/:id" element={<Details />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/getdata" element={<GetData/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/schedule" element={<ScheduleWater/>} />
        <Route path="/supplyList" element={<SupplyList/>} />
        <Route path="/configure" element={<Configure/>} />
      </Routes>
      </main>
    </div>
</EspContext.Provider>
</AdminContext.Provider>
  );
}

export default MyDashboard;
