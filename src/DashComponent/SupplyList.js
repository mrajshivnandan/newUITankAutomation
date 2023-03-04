import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import Sortable from 'sortablejs';
import { ReactSortable } from "react-sortablejs";
import { getSupplyList, saveSupplyList } from '../utility/espFucntion';
import { showSimpleAlert } from '../components/AlertMsg';
import { CurrRow } from '../accessory/CurrTable';

// add or remove list items
const SupplyList = () => {
  const [supplyList, setSupplyList] = useState([
    { room: 1, name: 'Room1', status: "inactive" },
    { room: 2, name: 'Room2', status: "inactive" },
  ]);
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
      roomlist = roomlist.filter((e) => { return e.room !== value.room && e.name !== value.name });
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

  // validation for adding new room
  const roomError = 'range [0-10000]';
  const roomSchema = () => Yup.object({
    name: Yup.string().required("please enter room name")
      .test('Valid Character?', 'Name is Invalid', (str) => !(/[^a-zA-Z0-9_\s]+/.test(str))),
    room: Yup.number().required("enter room no.").min(0, roomError).max(10000, roomError)
  })

  // checks if room already exists
  const checkRoom = async (values) => {
    let errors = {};
    if (supplyList.filter(function (e) { return e.room === values.room; }).length > 0) {
      errors.room = "room exists"
    }
    return errors;
  }
  
  // handling form with formik
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: { name: "", room: "" },
    validationSchema: roomSchema,
    validate: checkRoom,
    onSubmit: (values, action) => {
      manageList("addListItem", values);
      action.resetForm();
    }
  })

  //update status value on clicking checkbox
  const toggleSupply = (room, name, isChecked,evt) => {
    // console.log(room, name, isChecked);
    manageList("updateListItem", { room, name, status: isChecked?'active':'inactive' });
    reset();
    // evt.stopPropagation();

  }

  // list item to be displayed
  const sList = (room, name,supplyOn,toggleSupply) => {
    return (
        <div key={room} className= 'list-group-item d-flex'>
            <div className="col-2">
              <input className="form-check-input" type="checkbox" value="" id={"rm-" + room}
                checked={supplyOn} onChange={(e) => { toggleSupply(room, name, e.target.checked,e); }} />
            </div>
            <div className='col-2'>
              <label className="form-check-label roomno" htmlFor={"rm-" + room} >{room}</label>
            </div>
            <div className="col-4"> {"" + name}</div>
            <div className="col-2">
              <span className='m-auto hover-pointer'><i class="fas fa-edit"></i></span>
            </div>
            <div className="col-2">
              <span className='m-auto hover-pointer' onClick={() => manageList(
                "removeListItem", { room, name })} style={{ cursor: 'pointer' }}><i class="fas fa-trash-alt"></i></span>
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

  //load list when page is loaded
  useEffect(() => {
    supplyList.forEach((e)=>{
      console.log(e);
    })
  }, [supplyList]);

  useEffect(() => {
    // showSimpleAlert("Hello there")
    loadSupplyList();
    
  }, []);


  return (
    <div className='m-3'>
  
  <h2 className='text-center mb-3'>Supply List</h2>
      <form onSubmit={handleSubmit}>
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
      </form>

      <div className='mb-3'>
        
      <button className='btn btn-secondary me-2 mb-2' type='button' onClick={selectAll} >Select All</button>
      <button className='btn btn-primary me-2 mb-2' type='button' onClick={deselectAll} >Deselect All</button>
      <button className='btn btn-secondary me-2 mb-2' type='button' onClick={sortasc}>Sort Asc</button>
      <button className='btn btn-secondary me-2 mb-2' type='button' onClick={sortdec}>Sort Dec</button>
      </div>


<div class="container-fluid px-0 px-lg-4">
<div className="card" style={{overflow:'scroll'}}>
  <div class="list-group" style={{minWidth:'600px'}}>
          <div class="list-group-item d-flex" >
              <div class="col-2">Active</div>
              <div class="col-2">RoomNo</div>
              <div class="col-4">Name</div>
              <div class="col-2">Edit</div>
              <div class="col-2">Delete</div>
          </div>
      </div>
    <ReactSortable className='list-group' key={seed} list={supplyList} setList={setSupplyList} ghostClass='bg-info' style={{display:'block',minWidth:'600px'}}>
      {supplyList.map((item) => (
        sList(item.room, item.name,item.status,toggleSupply)
      ))}
    </ReactSortable>
</div>
</div>

      
      <button className='btn btn-secondary me-2' type='button' onClick={loadSupplyList} >Cancel</button>
      <button className='btn btn-primary' type='button' onClick={saveChanges} >Save</button>

    </div>
  )
}

export default SupplyList