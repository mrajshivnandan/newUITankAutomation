import React from 'react'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'
import appdata from '../utility/appdata'
import { showModalAlert } from './AlertMsg'
const ContactPage = () => {

    const navigate = useNavigate()

    const initValue = {
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        mobile: '',
        city: '',
        message : ''
    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: initValue,
        validateOnBlur: false,
        // validateOnChange: true,
        onSubmit: (values, action)=>{
            sendMessage().then(()=>{
                action.resetForm();
                // navigate('/home')
            })
        }
        })

    // sent message to the backend
    const sendMessage = async () => {
        try {
            const {firstName, lastName, subject, email, mobile, city, message}= values;
            if( !firstName || !lastName || !subject || !email || !mobile || !city || !message){
                alert("Please fill all the details");
                return;
            }
            const res = await fetch(appdata.baseUrl+"/home/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    firstName,lastName,subject,email,mobile,city,message
                })
            });
            if (res.status > 201) {
                throw new Error(res.error);
            }
            // const data = await res.json();
            showModalAlert("Message sent successfully");
            navigate('/home')
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="container mt-5 shadow ">
        <div className="row ">
            <div className="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="d-flex mt-2">
                    {/* <i className="bi bi-geo-alt"></i> */}
                    <i className="fa fa-map-marker fa-2x mt-4" aria-hidden="true"></i>
                    {/* <i className='fal fa-location'></i> */}
                    <p className="mt-3 ms-3">Address : Bhavan's College Andheri(West)</p>
                </div>
                <div className="d-flex mt-2">
                    {/* <i className="bi bi-telephone-forward"></i> */}
                    <i className="fa fa-phone fa-2x mt-4" aria-hidden="true"></i>
                    <p className="mt-4 ms-3">Phone : 8888888888</p>
                </div>
                <div className="d-flex mt-2">
                    {/* <i className="bi bi-envelope"></i> */}
                    <i className="fa fa-envelope fa-2x mt-4" aria-hidden="true"></i>
                    <p className="mt-4 ms-3">Email : typroject@gmail.com</p>
                </div>
            </div>
            <div className="col-md-8 p-5 ">
                <h2>Get in touch</h2>
                <form onSubmit={handleSubmit} className="row g-3 contactForm mt-4">
                    <div className="col-md-6">
                      <label for="inputEmail4" className="form-label">First Name</label>
                      <input type="text" name="firstName" className="form-control" onChange={handleChange} value={values.firstName} required />
                    </div>
                    <div className="col-md-6">
                      <label for="inputPassword4" className="form-label">Last Name</label>
                      <input type="text" name="lastName" className="form-control" onChange={handleChange} value={values.lastName}  required />
                    </div>
                    <div className="col-12">
                      <label for="inputAddress" className="form-label">Subject</label>
                      <input type="text" name="subject" className="form-control" onChange={handleChange} value={values.subject}  required />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email Id</label>
                        <input type="email" name="email" className="form-control"onChange={handleChange} value={values.email}  required />
                      </div>
                    <div className="col-md-6">
                      <label for="inputCity" className="form-label">City</label>
                      <input type="text" name="city" className="form-control" onChange={handleChange} value={values.city}  />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Contact Number</label>
                        <input type="number" name="mobile" className="form-control" onChange={handleChange} value={values.mobile} required />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" name="message" onChange={handleChange} value={values.message} rows="3"></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
