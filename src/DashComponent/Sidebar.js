import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import contactImg from '../images/undraw_rocket.svg'
import myImg from '../images/logo4.png'

function Sidebar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
            
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon">
                            <img src={myImg} alt="..." width={80} height={80}    />
                            </div>
                            <div className="sidebar-brand-text mx-3">Society Admin </div>
                            <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/*   <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Data
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <Link className="nav-link" to='/user/details'>
                                <i className="fas fa-fw fa-cog"></i>
                                <span>User Details</span>
                            </Link>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <Link className="nav-link" to='/supplyList'>
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Supply List</span>
                            </Link>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Monitoring & Control
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                        
                            <Link className="nav-link" to="/getdata">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Manual</span>
                            </Link>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Automatic</span></a>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/*   <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Services
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link" href=' '>
                                <i className="fas fa-fw fa-cog"></i>
                                <span>System Health</span>
                            </a>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link" href=' '>
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Settings</span>
                            </a>
                        </li>


                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                        {/*  <!-- Sidebar Message --> */}
                        <div className="sidebar-card d-none d-lg-flex">
                            <img className="sidebar-card-illustration mb-2" src={contactImg} alt="..." />
                            <p className="text-center mb-2">Having trouble in <br /><strong>Tank Automation</strong> <br />Please contact us</p>
                            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Help Center</a>
                        </div>

                    </ul>
                    {/*  <!-- End of Sidebar --> */}
    
                </div>
                {/*  <!-- End of Page Wrapper -->

                 {/* <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Sidebar;
