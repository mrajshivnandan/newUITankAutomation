import React, { useState, useEffect } from 'react'
import { userInfo } from '../utility/appdata';
import { loadUserData } from '../utility/user';

let loadcomp;
const Home = () => {
    // const [userData, setUserData] = useState({
    //     name: "TANK AUTOMATION",
    //     info: ""
    // });
    // // getting data from backend to fill home page data
    // const loadHomePage = async () => {

    //     //applying placeholders while data is being fetched from backend
    //     loadcomp.forEach((elem) => { elem.classList.add('placeholder'); })
    //     loadUserData()
    //         .then((data) => {
    //             if(data){
    //                 setUserData({ ...userData, name: data.name, info: "happy to see you back" });
    //             }
    //         })
    //         .finally(() => {
    //             //removing placeholders after data is fetched
    //             loadcomp.forEach((elem) => { elem.classList.remove('placeholder') });
    //         })
    // }

    // useEffect(() => {

    //     //getting all part where to apply placeholder while loading
    //     loadcomp = document.querySelectorAll('.glowme');

    //     // if user is logged in then only allow else send user to login page
    //     if (sessionStorage.getItem('loggedin') && !userInfo.creationdate) {
    //         loadHomePage();
    //     } else if (!sessionStorage.getItem('loggedin')) {
    //         setUserData({ ...userData, name: "TANK AUTOMATION", info: "" });
    //     }
    //     else {
    //         setUserData({ ...userData, name: userInfo.name, info: "happy to see you back" });
    //     }
    //     //   eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <>
        <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center">
                    <h1 class="display-4 text-black">Build robust landing pages now</h1>
                    <p class="text-black my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia
                        sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel excepturi ipsa voluptate dicta!</p>
                    <a href="#" class="btn me-2 btn-primary">Get Started</a>
                    <a href="#" class="btn btn-outline-light">My Portfolio</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home