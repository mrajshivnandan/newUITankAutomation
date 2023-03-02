import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center">
                    <h1 class="fs-10 display-4 text-white">Tank Automation</h1>
                    <p class="fs-5 text-white my-3">Tank Automation provides equitable water supply, reliability, completely visibility into your tanks, operate automatically, flexibility and it reduces the wastage of water</p>
                    <a href="#" class="btn me-2 btn-primary">Contact Us </a>
                </div>
            </div>
        </div>
    </div>

    <section id="team" >
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">TEAM</h6>
                    <h1>Meet Our Team Members</h1>
                </div>
            </div>
            <div class="row text-center g-4">
                <div class="col-lg-5 card col-sm-6 me-5">
                    <div class="team-member card-effect">
                        <img src={require("../images/RajMishra.jpg")} alt=""/>
                        <h5 class="mb-0 mt-4">Raj Mishra</h5>
                        <p>Programmer</p>
                        <div class="social-icons">
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 card col-sm-6 ">
                    <div class="team-member card-effect">
                        <img src={require("../images/HimanshuThakur.jpg")} alt="" />
                        <h5 class="mb-0 mt-4">Himanshu Thakur</h5>
                        <p>Web Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="row w-100 py-0 bg-light" id="features">
        <div class="col-lg-6 col-img"></div>
        <div class="col-lg-6 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <h6 class="text-primary">WHY TO CHOOSE US</h6>
                        <h1>Best solution for your society</h1>
                        <p>This Water Automation in Modern Society [WAMS]  is to observe and manage the wastage of water due to various reasons like tap leakage, pipe leakage and water tank overflow. It can be deployed in each and every building which sends the water level information to the owner of a particular building.</p>

                        <div class="feature d-flex mt-5">
                            <div class="iconbox me-3">
                                {/* <i class='bx bxs-comment-edit'></i> */}
                            </div>
                            <div>
                                <h4>Automatic</h4>
                                <p>Eliminating manual operations with a timer switch, the frustrations of manual monitoring water tanks are minimized. Water levels are maintained at the appropriate levels thanks to the automatic operations of these devices. </p>
                            </div>
                        </div>
                        <div class="feature d-flex">
                            <div class="iconbox me-3">
                                {/* <i class='bx bxs-user-circle'></i> */}
                            </div>
                            <div>
                                <h4>Control and monitor water level</h4>
                                <p> It monitor water level and switches motor automatically when water goes above or below a certain level. </p>
                            </div>
                        </div>
                        <div class="feature d-flex">
                            <div class="iconbox me-3">
                                {/* <i class='bx bxs-download'></i> */}
                            </div>
                            <div>
                                <h4>Power Saver</h4>
                                <p>Living in an age where we need to be more conscious of the energy that we use, a water level controller is ideal at saving power. Normally, regulating water levels can consume electricity and wastewater. However, with automatic controllers, the electricity usage is limited as well as less water needed to regulate supply.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio">
        <div class="container-fluid">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">ASSEST</h6>
                    <h1>Components Used</h1>
                    <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet eaque fuga
                        in cumque optio consectetur harum vitae debitis sapiente praesentium aperiam aut</p>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="https://th.bing.com/th/id/OIP.ATjBP0vDu-IEhh-8Y1XFUAHaFj?pid=ImgDet&rs=1" alt="" />
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">ESP32 Nodemcu</h4>
                                <h6 class="text-white">ESP32 is a low-cost System on Chip (SoC) Microcontroller from Espressif Systems, the developers of the ESP8266 SoC. It is a successor to ESP8266 SoC and comes in both single-core and dual-core variations of Tensilica's 32-bit Xtensa LX6 Microprocessor with integrated Wi-Fi and Bluetooth.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="https://th.bing.com/th/id/OIP.IrvTC5TpLQrppGsZGFzleQHaHa?pid=ImgDet&rs=1" alt="" />
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">HC-SR04- Ultrasonic sensor</h4>
                                <h6 class="text-white">The HC-SR04 is a type of ultrasonic sensor which uses sonar to find out the distance of the object from the sensor. It provides an outstanding range of non-contact detection with high accuracy & stable readings. It includes two modules like an ultrasonic transmitter & receiver.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="https://th.bing.com/th/id/OIP.LLbtMqMmpSGmn_c9BEsbNQHaHa?pid=ImgDet&rs=1" alt="" />
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Solenoid valve 18v</h4>
                                <h6 class="text-white">A solenoid valve is an electromechanical valve that operates using an in-built actuator in the form of an electrical coil and a plunger. They are normally open and normally closed. The solenoid (electrical coil) is operated using an AC or DC. DC supply is provided through a battery, generator, or rectifier. </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="https://th.bing.com/th/id/OIP.1B-2Sa0HcSSgDTwAP3D7ygHaHa?pid=ImgDet&rs=1" alt=""/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">DC Water Pump</h4>
                                <h6 class="text-white">Micro dc 3-6v micro submersible pump mini water pump for fountain garden mini water circulation system diy project dc 3v to 6v submersible pump micro mini submersible water pump 3v to 6vdc water pump for diy dc pump for hobby kit mini submersible pump motor this is a low cost, small size submersible pump motor which can be operated from a 2.5 ~ 6V power supply.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="https://th.bing.com/th/id/OIP.fJpguE7TKM1xxbI07hWWSQHaHa?pid=ImgDet&rs=1" alt=""/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">YF-S401- Flow sensor</h4>
                                <h6 class="text-white">The Water Flow sensor measures the rate of a liquid flowing through it. It is usually used at the inlet end to detect the amount of flow. When liquid flows through the sensor, a magnetic rotor will rotate and the rate of rotation will vary with the rate of flow. </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="https://th.bing.com/th/id/OIP.HoLb9aOnAo_3W1V1mI1GNQHaHa?pid=ImgDet&rs=1" alt=""/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">5V Single-Channel Relay Module</h4>
                                <h6 class="text-white">Relay is basically a switch which opens and closes the circuit either electronically or mechanically. In other words we can say that a relay is an electromechanical switch which uses electromagnetism from small current or voltage to switch higher current or voltage for different appliances. It has two basic contacts i.e. NO (Normally Open) and NC (Normally Closed)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
