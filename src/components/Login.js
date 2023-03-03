import {React, useEffect} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import appdata,{userInfo} from '../utility/appdata';
import Cookies from 'js-cookie';
import {useFormik} from 'formik';
import loginSchema from '../schemas/loginSchema';
import { loadSpinner, startSpinner, stopSpinner } from './Spinner';
import {loadAlerts,showModalAlert,showSimpleAlert} from './AlertMsg';
// import { loadSpinner, startSpinner, stopSpinner } from './Spinner';
const buildingImg= require('../images/building.png');

const Login = () => {
    //eslint-disable-next-line
    const navigate= useNavigate();
    const initValue= {
        email:"",
        password:""
    }
    // using formik validation to validate users input
    const {values,errors,touched,handleChange,handleSubmit,handleBlur}= useFormik({
        initialValues:initValue,
        validationSchema:loginSchema,
        onSubmit: (values,action)=>{
            action.resetForm();
            // console.log(values);
            submitUserData();
        }
    })
    
    // try to login user by submitting the form
    const submitUserData =async()=>{
        try {
            startSpinner();
        const {email,password}= values;
        if(!email || !password){
            alert("Please fill all the details");
            return;
        }
        const res = await fetch(appdata.baseUrl+"/login",{
            method: "POST",
            // credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data= await res.json();

        if(res.status>201 || !data){
            if(data && data.error==='Incorrect password'){
                showModalAlert("Incorrect password");
            }else{
                showModalAlert("Invalid credentials");
            }
            console.log("Failed to login!");
        }else{
            sessionStorage.setItem('loggedin','true')
            showSimpleAlert("Login Successful");
            const userinfo = data.userData;
            Object.entries(userinfo).forEach((e) => {if(userInfo[e[0]]!==undefined){userInfo[e[0]]= e[1]}});
            
            console.log("Login Successful");
            const token= Cookies.get('jwtoken');
            if(!token){
                Cookies.set('jwtoken',data.token);
            }
            // console.log(state,Cookies.get());
            if(userinfo.verified){
                navigate('/');
                // setTimeout(() => {
                //     console.log("Logged in");
                // }, 100);
            }else{
                navigate('/');
                // navigate('/verify');
            }
            window.location.reload();
        }
        } catch (error) {
            showModalAlert("Failed to Login");
            console.log(error);
        }finally{
            stopSpinner();
        }
    }

    // load alerts and spinner after loading page
    useEffect(()=>{
        loadSpinner();
        loadAlerts();
    },[])
  return (
    <>
        <div className="card-body p-md-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                    <form onSubmit={handleSubmit} method="POST" className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-1">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <input type="email" name="email" className="form-control"
                                    onBlur={handleBlur} onChange={handleChange} value={values.email} placeholder="Your Email" required />
                            </div>
                        </div>
                        <p className='ms-4 mt-1 mb-4 text-danger' >{errors.email && touched.email ? errors.email:""}</p>

                        <div className="d-flex flex-row align-items-center mb-1">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <input type="password" name="password" className="form-control"
                                    onBlur={handleBlur} onChange={handleChange} value={values.password} placeholder="Password" required />
                            </div>
                        </div>
                        <p className='ms-4 mt-1 mb-4 text-danger' >{errors.password && touched.password ? errors.password:""}</p>

                        <div className="d-flex flex-row justify-content-center mb-4">
                            <div className="">
                                Forgot Password ? <NavLink to="/forgotPassword">click here</NavLink>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center mb-4">
                            <div className="">
                                Don't have an account? <NavLink to="/register">Apply here</NavLink>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>

                    </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center order-1 order-lg-2">

                    <img src={buildingImg}
                        className="img-fluid log_img" alt="login_img"/>

                </div>
            </div>
        </div>

    </>
  )
}

export default Login