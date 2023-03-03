import '../App.css'
import React, { useEffect, useRef, useState } from 'react'
import { fetchInfo } from '../utility/appdata';
import { loadProgBar, toggleCheckbox, loadSensorData } from '../utility/espFucntion';
import { useNavigate } from 'react-router-dom';
import { CardFill } from '../accessory/progressbar/FillProgress';
import { MiniProgressCard, OneProgressCard } from '../accessory/MiniCard';

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
const GetData = () => {
    const navigate = useNavigate();
    const [sensorData, setSensorData] = useState(initValue);
    const [repeatedData, setRepeatedData] = useState(false);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value; //assign the value of ref to the argument
        }, [value]); //this code will run when the value of 'value' changes
        return ref; //in the end, return the current ref value.
    }

    const prevData = usePrevious(sensorData.index);

    // fetch sensor data from backend and update it
    // if multiple request are failed then stop api request
    useEffect(() => {
        let loadDataInterval;
        let repeatData = 0;
        if (sessionStorage.getItem('loggedin')) {
            console.log("started interval ");
            loadSensorData(setSensorData);
            loadProgBar();
            loadDataInterval = setInterval(() => {
                loadSensorData(setSensorData).then((sent) => {
                    // console.log(fetchInfo.fetchTry,fetchInfo.interval,sent);
                    if (sent.index === prevData.current) {
                        repeatData++;
                        if (repeatData > 5) {
                            setRepeatedData(true);
                        }
                    } else {
                        repeatData = 0;
                        setRepeatedData(false)
                    }
                    console.log(sent.index, prevData.current, repeatData);
                    if (sent) {
                        if (fetchInfo.fetchTry >= 20) {
                            fetchInfo.fetchTry = 0;
                        } else if (fetchInfo.fetchTry > 0) {
                            fetchInfo.fetchTry = fetchInfo.fetchTry - 1;
                        }
                    } else {
                        if (fetchInfo.fetchTry >= 20) {
                            clearInterval(loadDataInterval);
                        } else {
                            fetchInfo.fetchTry = fetchInfo.fetchTry + 1;
                        }
                    }
                })
            }, fetchInfo.interval);

        } else {
            navigate('/login')
        }

        return () => {
            console.log("stopped interval ");
            clearInterval(loadDataInterval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>

            <div id="row text-center">
                <div className='m-4 mx-auto d-flex flex-column pe-2 w-80 col-lg-12 col-xl-10'>

                    <h2 className='text-center'>Water Monitoring & control</h2>
                    <p className='text-center text-warning'>{repeatedData ? "This may be some old data" : ""}</p>

                    <div className='row'>
                        <div class="col-lg-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            {/* <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Last Filled</div> */}
                                            <div class="h4 mb-0 font-weight-bold text-gray-800">Buildin LED: </div>
                                        </div>
                                        <div class="col-auto me-3">
                                            <div className="container form-check form-switch form-check-reverse content-align-center mr-4">
                                                <input className="ms-2 form-check-input" name="buildLed" onClick={(e) => { toggleCheckbox(e, sensorData, setSensorData) }}
                                                    checked={sensorData.buildLed} type="checkbox" role="switch" id="buildLed" style={{ transform: "scale(2.4)" }} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="col-lg-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            {/* <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Last Filled</div> */}
                                            <div class="h4 mb-0 font-weight-bold text-gray-800">Motor: </div>
                                        </div>
                                        <div class="col-auto me-3">
                                            <div className="container form-check form-switch form-check-reverse content-align-center mr-4">
                                                <input className="ms-2 form-check-input" name="motorOn" onClick={(e) => { toggleCheckbox(e, sensorData, setSensorData) }}
                                                    checked={sensorData.motorOn} type="checkbox" role="switch" id="motorSwitch" style={{ transform: "scale(2.4)" }} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {sensorData.tankFull && <p id="alertmsg" className="markedr" >Tank is Full</p>}
                    <p id="datetime" className="markedr" ></p>

                    
    <div className="row mt-4">
          <OneProgressCard color= 'info' title= 'Upper tank volume' currVol= {sensorData.UTVolume} totalVol= {1200}/>
          <OneProgressCard color= 'info' title= 'Lower tank volume' currVol= {sensorData.LTVolume} totalVol= {1200}/>
      </div>
                    
                    <div className='mt-4 row'>
                    <div className='col-lg-6 col-12 text-center'>
                        <CardFill percent= {sensorData.upperTank} title='UPPER TANK'/>
                    </div>
                    <div className='col-lg-6 col-12 text-center'>
                        <CardFill percent= {sensorData.lowerTank} title='LOWER TANK'/>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GetData