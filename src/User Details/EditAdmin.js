import { useFormik } from 'formik'
import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { adminInfo } from '../utility/appdata';
import { showSimpleAlert } from '../components/AlertMsg';

const Register = () => {
    const navigate = useNavigate()

    // validation for admin details
    const adminSchema = () => Yup.object({
      name:Yup.string().min(2).max(25).required("please enter your name"),
      email:Yup.string().email().required("please enter your email"),
      phone:Yup.string().min(10).max(15).required("please enter your mobile no."),
      gender:Yup.string().required()
    })

    const initValue = {
      name:adminInfo.name,
      email:adminInfo.email,
      phone:adminInfo.phone,
      gender:adminInfo.gender,
      }
    const {values,errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    // initialValues: { wing: "A", room: "101", name: "test", email: "test@mail.com", age: "20", mobile: "8456893296", ownership: "", status: "" },
    initialValues: initValue,
    validationSchema: adminSchema,
    onSubmit: (values, action) => {
        console.log("submit")
        // action.resetForm();
    }
    })

    useEffect(() => {
        console.log("List is loading");
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
  
  const saveChanges= async()=>{
    // console.log((supplyList[0]));
    showSimpleAlert("List Updated Successfully")
  }

  const cancelChange= async()=>{
    
    // console.log(slist);
  }

  return (
    <div className="container">
    <NavLink to="/users">Go Back</NavLink>
    <form className="mt-4" onSubmit={handleSubmit}>
        <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange} className="form-control" />
            <p className='ms-4 mt-1 mb-4 text-danger' >{errors.name && touched.name ? errors.name : ""}</p>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} className="form-control" />
                <p className='ms-4 mt-1 mb-4 text-danger' >{errors.email && touched.email ? errors.email : ""}</p>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                <input type="number" name="mobile" value={values.mobile} onBlur={handleBlur} onChange={handleChange} className="form-control" />
                <p className='ms-4 mt-1 mb-4 text-danger' >{errors.mobile && touched.mobile ? errors.mobile : ""}</p>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
                <select className="form-select" aria-label="Default select example" name="gender" value={values.status} onBlur={handleBlur} onChange={handleChange} >
                    <option value="" disabled selected hidden>Please Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <p className='ms-4 mt-1 mb-4 text-danger' >{errors.gender && touched.gender ? errors.gender : ""}</p>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Register
