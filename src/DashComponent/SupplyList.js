import React, { useEffect, useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { getSupplyList, saveSupplyList } from '../utility/espFucntion';
import { showSimpleAlert } from '../components/AlertMsg';

// add or remove list items
const SupplyList = () => {
  const [supplyList, setSupplyList] = useState([]);
  const [seed, setSeed] = useState(1);
  const reset = () => {
       setSeed(Math.random());
   }

  // reducer for adding,removing and updating supply listItem
  const manageList = (type, value) => {
    let roomlist = supplyList;
    if (type === "addListItem") {
      roomlist.push({ value});
      setSupplyList(roomlist);
    } else if (type === "removeListItem") {
      roomlist = roomlist.filter((e) => { return e.room !== value.room || e.wing !== value.wing });
      setSupplyList(roomlist)
    } else if (type === "updateListItem") {

      const index = roomlist.findIndex((obj => obj.room === value.room));
      if (index !== -1) {
        roomlist[index] = { ...roomlist[index], status: value.status };
        // console.log(roomlist[index]);
      }
      setSupplyList(roomlist)
    }
  }
  
  //update status value on clicking checkbox
  const toggleSupply = (room, name, isChecked,evt) => {
    // console.log(room, name, isChecked);
    manageList("updateListItem", { room, name, status: isChecked?'active':'inactive' });
    reset();
    // evt.stopPropagation();

  }

  // list item to be displayed
  const sList = (room, name, wing, status, toggleSupply) => {
    return (
        <div key={wing+room} className= 'list-group-item d-flex'>
            <div className="col-2">
              <input className="form-check-input" type="checkbox" value="" id={"rm-" + room}
                checked={status==='active'} onChange={(e) => { toggleSupply(room, name, e.target.checked,e); }} />
            </div>
            <div className='col-2'>
              <label className="form-check-label roomno" htmlFor={"rm-" + room} >{room}</label>
            </div>
            <div className="col-4"> {"" + name}</div>
            <div className="col-2">
              <span className='m-auto hover-pointer'>{wing}</span>
            </div>
            <div className="col-2">
              <span className='m-auto hover-pointer' onClick={() => manageList(
                "removeListItem", { room, wing })} style={{ cursor: 'pointer' }}><i className="fas fa-trash-alt"></i></span>
            </div>
        </div>
    )
  }


  //update supplylist to database
  const saveChanges= async()=>{
    // console.log((supplyList[0]));
    const saved = await saveSupplyList(supplyList);
    if(saved) showSimpleAlert("List Updated Successfully")
  }

  //fetch supply list from database
  const loadSupplyList= async()=>{
    const slist= await getSupplyList();
    if(slist){
      setSupplyList(slist);
    }
    // console.log(slist);
  }

  //select all checkbox of supply list
  const selectAll= async()=>{
    let slist= supplyList.map((e)=>{
      return {...e,status:"active"};
    });
    setSupplyList(slist);

  }

  //deselect all checkbox of supply list
  const deselectAll= async()=>{
    let slist= supplyList.map((e)=>{
      return {...e,status:"inactive"};
    });
    setSupplyList(slist);
  }

  //sort the list in ascending order
  const sortasc= async()=>{
    let slist= supplyList.sort((a,b)=>{return a.room-b.room});
    setSupplyList(slist);
    reset()
  }

  //sort the list in descending order
  const sortdec= async()=>{
    let slist= supplyList.sort((a,b)=>{return b.room-a.room});
    setSupplyList(slist);
    reset()
  }

  useEffect(() => {
    // showSimpleAlert("Hello there")
    loadSupplyList();
    
  }, []);


  return (
    <div className='m-3'>
  
  <h2 className='text-center mb-3'>Supply List</h2>
      {/* <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-4">
          <div className="col-sm-7">
            <input type="text" className="form-control" onBlur={handleBlur} onChange={handleChange} value={values.name}
              name='name' placeholder="name" aria-label="City" />
            <p className='ms-4 mt-1 mb-4 text-danger' >{errors.name && touched.name ? errors.name : ""}</p>
          </div>
          <div className="col-sm">
            <input type="number" className="form-control" onBlur={handleBlur} onChange={handleChange} value={values.room}
              name='room' placeholder="room" aria-label="State" />
            <p className='ms-4 mt-1 mb-4 text-danger' >{errors.room && touched.room ? errors.room : ""}</p>
          </div>
          <div className="col-sm">
            <button className='btn btn-primary' type='submit' >Add</button>
          </div>
        </div>
      </form> */}

      <div className='mb-3'>
        
      <button className='btn btn-secondary me-2 mb-2' type='button' onClick={selectAll} >Select All</button>
      <button className='btn btn-primary me-2 mb-2' type='button' onClick={deselectAll} >Deselect All</button>
      <button className='btn btn-secondary me-2 mb-2' type='button' onClick={sortasc}>Sort Asc</button>
      <button className='btn btn-secondary me-2 mb-2' type='button' onClick={sortdec}>Sort Dec</button>
      </div>


<div className="container-fluid px-0 px-lg-4">
<div className="card" style={{overflow:'scroll'}}>
  <div className="list-group" style={{minWidth:'600px'}}>
          <div className="list-group-item d-flex" >
              <div className="col-2">Active</div>
              <div className="col-2">RoomNo</div>
              <div className="col-4">Name</div>
              <div className="col-2">Wing</div>
              <div className="col-2">Delete</div>
          </div>
      </div>
    <ReactSortable className='list-group' key={seed} list={supplyList} setList={setSupplyList} ghostclassName='bg-info' style={{display:'block',minWidth:'600px'}}>
      {supplyList.map((item) => (
        sList(item.room,item.name,item.wing,item.status,toggleSupply)
      ))}
    </ReactSortable>
</div>
</div>

      <div className='mt-2'>
        <button className='btn btn-secondary me-2' type='button' onClick={loadSupplyList} >Cancel</button>
        <button className='btn btn-primary' type='button' onClick={saveChanges} >Save</button>
      </div>

    </div>
  )
}

export default SupplyList