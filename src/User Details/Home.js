import React,{ useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { getSupplyList, saveSupplyList } from '../utility/espFucntion';
import { setModalBtnClick, showModalAlert,loadAlerts } from '../components/AlertMsg';
import { showSimpleAlert } from '../components/AlertMsg';

const Home = (props) => {
  
  const [getuserdata, setUserdata] = useState([])

  const loadSupplyList= async()=>{
    const slist= await getSupplyList();
    if(slist){
      setUserdata(slist);

    }
    
  }
  
  const deleteUser = (room,wing) => {
    // alert("Hello")
    let roomlist = getuserdata
    setModalBtnClick(async() => {
      roomlist = roomlist.filter((e) => {
      return e.room !== room || e.wing !== wing 
    });

  console.log(roomlist);
  setUserdata(roomlist);
  const saved = await saveSupplyList(roomlist);
  if(saved) showSimpleAlert("List Deleted Successfully")
  
  });
  showModalAlert("Are you sure you want to delete user?", 'Confirm','red')

  
  }
  
  const CurrRow = (props) => {
    return (
        <tr key={props.ID}>
            <td className="text-center text-muted">{props.ID}</td>
            <td>
                <div className="widget-heading">{props.Name}</div>
            </td>
            <td className="text-center">{props.Wing}-{props.Room}</td>
            <td className="text-center">
                <div className={`badge badge-${props.Color}`}>{props.Status}</div>
            </td>
            <td className="text-center">
              <NavLink to={`/users/view/${props.ID}`}><button className="btn btn-primary ms-2 mt-1"><i class="fas fa-eye"></i></button></NavLink>
              <NavLink to={`/users/edit/${props.ID}`}><button className="btn btn-success ms-1 mt-1"><i class="fas fa-user-edit"></i></button></NavLink>
              <button className="btn btn-danger ms-2 mt-1" onClick={()=>deleteUser(props.Room,props.Wing)}><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    )
  }
  
  
  useEffect(() => {
    loadSupplyList();
    loadAlerts();
    console.log();
    // console.log(updata);
    // console.log(dltdata);
  }, [])
  
  return (
    <>
    
    <h1>User Details</h1>
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2 text-right">
          <NavLink to="/user/register" className="btn btn-primary">Add data</NavLink>
        </div>
      </div>
    </div>

    <div className="main-card mb-3 card m-3">
                <div className="card-header">User List
                    <div className="btn-actions-pane-right">
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th>Name</th>
                                <th className="text-center">Flat</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getuserdata.map((item, id) => {
                              return (
                                <>  
                                <CurrRow 
                                ID= {id+1} 
                                Name= {item.name} 
                                Room= {item.room}
                                Wing= {item.wing}
                                Status={(item.status)} 
                                Color= {item.status === "active" ? "success": "info"}
                                />

                                </>
                              )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

    </>
  )
}

export default Home
