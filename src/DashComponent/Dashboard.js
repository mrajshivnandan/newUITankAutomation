import React from 'react'
import { CurrTable } from '../accessory/CurrTable';
import { MiniCard, MiniProgressCard, OneProgressCard } from '../accessory/MiniCard';
// import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { CardFill} from '../accessory/progressbar/FillProgress';
// let percentage = 44;

const Dashboard = () => {
  return (
    <>
    <div id='content-wrapper' className='d-flex flex-column'>
    <div className="container-fluid">
      {/*  <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <MiniCard/>
       {/* <div className="border-bottom-primary shadow mb-4" style={{opacity:'0.6'}}></div> */}

        <div className='mt-4 row'>
          <div className='col-lg-6 col-12 text-center'>
            <CardFill percent= {55} title='UPPER TANK'/>
          </div>
          <div className='col-lg-6 col-12 text-center'>
            <CardFill percent= {40} title='LOWER TANK'/>
          </div>
        </div>

                      
    <div className="row mt-4">
          <OneProgressCard color= 'info' title= 'Upper tank volume' currVol= {240} totalVol= {1200}/>
          <OneProgressCard color= 'info' title= 'Lower tank volume' currVol= {694} totalVol= {1200}/>
      </div>

        <CurrTable/>
      </div>
      </div>
    </>
  )
}

export default Dashboard
