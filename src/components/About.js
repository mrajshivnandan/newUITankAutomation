import React from 'react'

// const imgPath = require('../images/avatar1.png');

// About us tab
const About = () => {
    return (
        <>
            <div className="card-body p-md-5">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">TEAM MEMBERS</p>

                <div className="row justify-content-center mb-4">

                    <div className="col-md-10 col-lg-4 col-xl-3 order-1 d-flex justify-content-center">
                        <img src={require("../images/RajMishra.jpg")} width="200px"
                            className="img-fluid" alt="login_img" />
                    </div>

                    <div className="col-md-10 col-lg-8 col-xl-9 d-flex order-2">
                        <div className="d-flex flex-column flex-fill">
                            <h2 className="fw-bold col-xs-11 align-self-center align-self-lg-start my-1">RAJ MISHRA</h2>
                            <h5 className="fw-bold col-xs-11 align-self-center align-self-lg-start my-1">Programmer</h5>
                            <div className='col-11 col-lg-10 align-self-center align-self-lg-start my-1'>
                                {/* <p>Class: TYBSC-IT</p>
                                <p>COLLEGE: BHAVANS COLLEGE</p>
                                <p>YEAR: 2022-23</p> */}
                                <p>Rohit Inamdar is an investigative journalist with a passion for presenting hard-hitting and factually correct stories to his readers. He has 20 years of experience in reporting from some of the most volatile places in the world. His journalism awards include the AMDH Award, the Indian Magazine Award and the KUQ Prize. He is a regular contributor to the OneIndia Magazine, The Daily Times and other news media outlets. In his free time, he goes boating and fishing.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row justify-content-center mb-4">

                    <div className="col-md-10 col-lg-4 col-xl-3 order-1 d-flex justify-content-center">
                        <img src={require("../images/HimanshuThakur.jpg")} width="200px"
                            className="img-fluid" alt="login_img" />
                    </div>

                    <div className="col-md-10 col-lg-8 col-xl-9 d-flex order-2">
                        <div className="d-flex flex-column flex-fill">
                            <h2 className="fw-bold col-xs-11 align-self-center align-self-lg-start my-1">HIMASHU THAKUR</h2>
                            <h5 className="fw-bold col-xs-11 align-self-center align-self-lg-start my-1">Web Developer</h5>
                            <div className='col-11 col-lg-10 align-self-center align-self-lg-start my-1'>
                                {/* <p>Class: TYBSC-IT</p>
                                <p>COLLEGE: BHAVANS COLLEGE</p>
                                <p>YEAR: 2022-23</p> */}
                                <p>Rohit Inamdar is an investigative journalist with a passion for presenting hard-hitting and factually correct stories to his readers. He has 20 years of experience in reporting from some of the most volatile places in the world. His journalism awards include the AMDH Award, the Indian Magazine Award and the KUQ Prize. He is a regular contributor to the OneIndia Magazine, The Daily Times and other news media outlets. In his free time, he goes boating and fishing.</p>
                            </div>                       
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default About