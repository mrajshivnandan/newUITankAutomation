import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSupplyList } from '../utility/espFucntion';
import { NavLink } from 'react-router-dom';

const Details = () => {

  const [getuserdata, setUserdata] = useState([])
  
  const loadSupplyList= async()=>{
    const slist= await getSupplyList();
    console.log(slist)
    if(slist){
      const result = slist[id-1];
      setUserdata(result);
    }
  }
  
  const { id } = useParams("");
  console.log(id);
  // console.log(getuserdata[1]);
  // console.log(getuserdata[id-1]);

  // console.log(getuserdata);
  useEffect(() => {
    loadSupplyList();
    // loadAlerts();
  }, [])


  return (
    <>
    <div className='container'>
    <NavLink to="/users">Go Back</NavLink>
    </div>
    <body className='bg-light'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10 mt-5 pt-5'>
            <div className='row z-depth-3'>
              <div className='col-sm-4 bg-info rounded-left'>
                <div className='card-block text-center text-white'>
                  <i className='fas fa-user-tie fa-7x mt-5'></i>
                  <h2 className='font-weight-bold mt-4'>{getuserdata.name}</h2>
                  <p>{getuserdata.wing+"-"+getuserdata.room}</p>
                  <NavLink to={`/users/edit/${id}`}><i className='far fa-edit fa-2x mb-4'></i></NavLink>
                </div>
              </div>
              <div className='col-sm-8 bg-white rounded-right'>
                <h3 className='mt-3 text-center'>Information</h3>
                <hr className='badge-primary mt-0 w-25'/>
                <div className='row'>
                  <div className='col-sm-6'>
                    <p className='font-weight-bold'>Email: </p>
                    <h6 className='text-mutedS'>{getuserdata.email}</h6>
                  </div>
                  <div className='col-sm-6'>
                    <p className='font-weight-bold'>Phone: </p>
                    <h6 className='text-mutedS'>{getuserdata.mobile}</h6>
                  </div>
                </div>
                <h4 className='mt-3'>Others</h4>
                <hr className='bg-primary'></hr>
                <div className='row'>
                <div className='col-sm-6'>
                    <p className='font-weight-bold'>Ownership: </p>
                    <h6 className='text-mutedS'>{getuserdata.ownership}</h6>
                  </div>
                  <div className='col-sm-6'>
                    <p className='font-weight-bold'>Status: </p>
                    <h6 className='text-mutedS'>{getuserdata.status}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </>
  )
}

export default Details
