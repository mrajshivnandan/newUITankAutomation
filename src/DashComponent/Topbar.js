// import React, { useState } from 'react'
import { setModalBtnClick, showModalAlert, showSimpleAlert,loadAlerts } from '../components/AlertMsg';
import profileImg from'../images/undraw_profile.svg'
import {useNavigate, Link } from 'react-router-dom'
import appdata from '../utility/appdata';
import { logoutAdmin } from '../utility/admin'
import { useContext, useEffect } from 'react';
import { AdminContext } from './MyDashboard';

const Topbar = () => {
    const {adminData} = useContext(AdminContext)
    const navigate = useNavigate({});

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
                  <span className="badge badge-danger badge-counter">3+</span>
              </a>
              {/*   <!-- Dropdown - Alerts --> */}
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown">
                  <h6 className="dropdown-header">
                      Alerts Center
                  </h6>
                  <a className="dropdown-item d-flex align-items-center" href=" ">
                      <div className="mr-3">
                          <div className="icon-circle bg-primary">
                              <i className="fas fa-file-alt text-white"></i>
                          </div>
                      </div>
                      <div>
                          <div className="small text-gray-500">December 12, 2019</div>
                          <span className="font-weight-bold">A new monthly report is ready to download!</span>
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href=" ">
                      <div className="mr-3">
                          <div className="icon-circle bg-success">
                              <i className="fas fa-donate text-white"></i>
                          </div>
                      </div>
                      <div>
                          <div className="small text-gray-500">December 7, 2019</div>
                          $290.29 has been deposited into your account!
                      </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href=" ">
                      <div className="mr-3">
                          <div className="icon-circle bg-warning">
                              <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                      </div>
                      <div>
                          <div className="small text-gray-500">December 2, 2019</div>
                          Spending Alert: We've noticed unusually high spending for your account.
                      </div>
                  </a>
                  <a className="dropdown-item text-center small text-gray-500" href=" ">Show All Alerts</a>
              </div>
          </li>

          <div className="topbar-divider d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href=" " id="userDropdown" role="button"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-lg-inline text-gray-600 small">{adminData.name}</span>
                  <img className="img-profile rounded-circle" alt='proficPic'
                      src={profileImg} />
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
