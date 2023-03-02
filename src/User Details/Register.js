import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import appdata from "../utility/appdata";
import Cookies from 'js-cookie';

const Register = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
    })

    const navigate = useNavigate();
    
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInpval((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, email, mobile, age } = inpval;

        const res = await fetch(appdata.baseUrl+"/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // cookie: Cookies.get('jwtoken'),
                name, email, mobile, age
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status > 201 || !data) {
            // console.log(error);
            // alert("error");
            throw new Error(res.error);

        } else {
            navigate("/")
            // setUdata(data)
            console.log("data added");

        }
    }

  return (
    <div className="container">
    <NavLink to="/">Go Back</NavLink>
    <form className="mt-4">
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" name="name" value={inpval.name} onChange={setdata} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">email</label>
                <input type="email" name="email" value={inpval.email} onChange={setdata} class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">age</label>
                <input type="text" name="age" value={inpval.age} onChange={setdata} class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Mobile</label>
                <input type="number" name="mobile" value={inpval.mobile} onChange={setdata} class="form-control" id="exampleInputPassword1" />
            </div>
            {/* <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Work</label>
                <input type="text" name="work" value={inpval.work} onChange={setdata} class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" class="form-label">Address</label>
                <input type="text" name="add" value={inpval.add} onChange={setdata} class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" class="form-label">Description</label>
                <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
            </div> */}

            <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Register
