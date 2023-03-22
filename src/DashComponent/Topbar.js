// import React, { useState } from 'react'
import { setModalBtnClick, showModalAlert, showSimpleAlert, loadAlerts } from '../components/AlertMsg';
import { useNavigate, Link } from 'react-router-dom'
import appdata from '../utility/appdata';
import moment from 'moment';
import { getTankAlert, logoutAdmin } from '../utility/admin'
import { useContext, useEffect } from 'react';
import { AdminContext, AlertContext } from './MyDashboard';

const Topbar = () => {
    const { adminData } = useContext(AdminContext)
    const navigate = useNavigate({});
    const {alerts,setAlerts}= useContext(AlertContext)

    const changeStyle = () => {
        const varr = document.getElementById('accordionSidebar')
        varr.classList.toggle("toggled");
    };

    const signoutUser = () => {
        // console.log('Signing out user');
        setModalBtnClick(() => {
            logoutAdmin(appdata).then(() => {
                navigate('/');
                window.location.reload();
            }).finally(() => {
                // console.log('Showing alert');
                showSimpleAlert("You have been logged out!", 'red');
            });
        });
        showModalAlert("Are you sure you want to exit?", 'Confirm')
    }
    useEffect(() => {
        loadAlerts();
        getTankAlert()
        .then((data)=>{
            if(data.alerts)
            setAlerts(data.alerts);
            console.log(data.alerts);
        })
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div id='content-wrapper' className='d-flex flex-column'>

                {/*  <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/*  <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle}>
                        <i className="fa fa-bars"></i>
                    </button>

                    {/*  <!-- Topbar Navbar --> */}
                    <ul className="navbar-nav ml-auto">

                        {/*  <!-- Nav Item - Alerts --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href=" " id="alertsDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                {/*  <!-- Counter - Alerts --> */}
                                <span className="badge badge-danger badge-counter">{alerts ? alerts.length : -1}</span>
                            </a>
                            {/*   <!-- Dropdown - Alerts --> */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>

                            {alerts && alerts.slice(0,3).map((alert,index)=>{
                                return(
                                <a key={index} className="dropdown-item d-flex align-items-center" href=" ">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500"> {moment(alert.timeStamp).format('lll')}</div>
                                        <span className="">{alert.message}</span>
                                    </div>
                                </a>)
                            })}


                                <Link className="dropdown-item text-center small text-gray-500" to="/tankAlerts">Show All Alerts</Link>
                            </div>
                        </li>

                        <div className="topbar-divider d-sm-block"></div>

                        {/* <!-- Nav Item - User Information --> */}
                        <li className="nav-item dropdown no-arrow placeholder-glow">
                            <a className="nav-link dropdown-toggle" href=" " id="userDropdown" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-lg-inline text-gray-600 small glowme">{adminData.name}</span>
                                <img className="img-profile rounded-circle glowme" alt='proficPic'
                                    src={adminData.profilePic} />
                            </a>
                            {/*  <!-- Dropdown - User Information --> */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <Link className="dropdown-item" to="profile">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </Link>
                                <Link className="dropdown-item" to="configure">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </Link>
                                <div className="dropdown-divider"></div>
                                <span className="dropdown-item" onClick={signoutUser}>
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </span>
                            </div>
                        </li>

                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Topbar
