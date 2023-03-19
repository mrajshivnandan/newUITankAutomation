import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminInfo } from '../utility/appdata';
import { loadAdminData } from '../utility/admin';
import { AdminContext } from './MyDashboard';
import ProfilePic from './ProfilePic'
// const imgPath = require('../images/avatar3.png');

let about = document.getElementById('aboutProfile');
let otherinfo = document.getElementById('otherInfo');
let loadcomp = document.querySelectorAll('.glowme');

const Profile = () => {
    const navigate = useNavigate();
    const {adminData, setAdminData} = useContext(AdminContext)
    const [selectedPart, setSelectedPart] = useState('about');

    // getting data from backend to fill profile page data
    const loadProfilePage = async () => {

        //applying placeholders while data is being fetched from backend
        loadcomp.forEach((elem) => { elem.classList.add('placeholder'); })
        loadAdminData()
            .then((data) => {
                if(data)
                setAdminData(data);
            })
            .finally(() => {
                loadcomp.forEach((elem) => { elem.classList.remove('placeholder') });
            })
    }

    //change the content when tabs are clicked
    const changeContent = (changeTo) => {

        setSelectedPart(changeTo);
        if (changeTo === 'about') {
            otherinfo.classList.remove('active')
            about.classList.add('active');
        } else if (changeTo === 'otherinfo') {
            about.classList.remove('active')
            otherinfo.classList.add('active');
        }
    }
    useEffect(() => {
        // if user is logged in then only allow else send user to login page
        if (!sessionStorage.getItem('loggedin')) {
            navigate('/login');
        }
        //getting components after the page is loaded
        about = document.getElementById('aboutProfile');
        otherinfo = document.getElementById('otherInfo');
        loadcomp = document.querySelectorAll('.glowme');
        if (!adminInfo.creationdate) {
            loadProfilePage();
        } else {
            setAdminData(adminInfo);
        }
        // console.log('about: ',about,'otherinfo ',otherinfo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // display profile section
    const ProfileSection = () => {
        return (
            <>
                <div className="placeholder-glow d-flex flex-column mt-4 profileSection">

                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">UserId : </span>
                        <span className="glowme col-xs-11 col-sm-7">{adminData._id}</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Name : </span>
                        <span className="glowme col-xs-11 col-sm-7">{adminData.name}</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Gender : </span>
                        <span className="glowme col-xs-11 col-sm-7">{adminData.gender}</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Email : </span>
                        <span className="glowme col-xs-11 col-sm-7">{adminData.email}</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Phone : </span>
                        <span className="glowme col-xs-11 col-sm-7">{adminData.phone}</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Date of creation : </span>
                        <span className="glowme col-xs-11 col-sm-7">{adminData.creationdate}</span>
                    </div>
                </div>

            </>
        )
    }

    //display otherinfo section
    const OtherInfo = () => {
        return (
            <>
                <div className="d-flex flex-column mt-4" id="otherInfo" >
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Role : </span>
                        <span className="col-xs-11 col-sm-7">Society Admin</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Room no. : </span>
                        <span className="col-xs-11 col-sm-7">105</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Tank capacity : </span>
                        <span className="col-xs-11 col-sm-7">400L</span>
                    </div>
                    <div className='row my-2' >
                        <span className="col-xs-11 col-sm-5 text_bold">Other : </span>
                        <span className="col-xs-11 col-sm-7">Description3</span>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <h2 className="text-center text-dark mb-3">Profile</h2>
            <div className="card p-md-4 m-2">

                <form method="get">
                    <div className="row justify-content-center mb-4">
                        <div className="col-sm-10 col-lg-4 order-1 d-flex ">
                            <div className="flex-fill p-lg-2 ps-2" style={{ width: '18rem' }}>
                                {/* <img src={imgPath} width="200px"
                                    className="img-fluid mb-2 profile_img" alt="login_img" /> */}
                                    <ProfilePic editMode={true}/>
                                <div className="p-0 w-100">
                                    <h5 className="card-title">Society Name</h5>
                                    <p className="card-text">Location of society</p>
                                </div>
                                <ul className="list-group list-group-flush" style={{ zIndex: "1" }}>
                                    <li className="list-group-item">Room number</li>
                                    <li className="list-group-item">tank capacity</li>
                                    <li className="list-group-item">other info</li>
                                </ul>
                                {/* <div className="card-body">
                                    <a href="/profile" className="card-link">Card link</a>
                                    <a href="/profile" className="card-link">Another link</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-10 col-lg-8 d-flex flex-column order-2 mt-4" >
                            <div className="col-lg-4 col-xl-3 order-1 d-flex mw-100 justify-content-between">
                                <div className='placeholder-glow' >
                                    <div className='glowme text_bold'>{adminData.name}</div>
                                    <div className="w-100"></div>
                                    <div className='glowme text-primary'>Society Admin</div>
                                    <div className="w-100"></div>
                                    <div className='glowme text-secondry'>Other info</div>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-light">Edit Profile</button>
                                </div>
                            </div>

                            <div className="col-lg-8 col-xl-9 mw-100 d-flex order-2 mt-4">
                                <div className="d-flex flex-column flex-fill">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <span className="nav-link active" onClick={() => { changeContent('about') }} id='aboutProfile'>Profile</span>
                                        </li>
                                        <li className="nav-item">
                                            <span className="nav-link" onClick={() => { changeContent('otherinfo') }} id='otherInfo'>Other info</span>
                                        </li>
                                    </ul>
                                    {selectedPart === 'about' ? <ProfileSection adminData={adminData} /> : <OtherInfo />}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Profile