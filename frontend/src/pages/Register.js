import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [form,setForm]=useState({

        username:"",

        email:"",

        password:"",

        password2:""

    });

    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            await api.post("users/register/",form);

            toast.success("Registration Successful");

            navigate("/login");

        }

        catch{

            toast.error("Registration Failed");

        }

    };

    return(

<div className="container py-5">

<div className="row justify-content-center">

<div className="col-md-6">

<div className="card shadow border-0">

<div className="card-body p-5">

<h2 className="text-center mb-4">

Create Account

</h2>

<form onSubmit={handleSubmit}>

<input className="form-control mb-3" name="username" placeholder="Username" onChange={handleChange}/>

<input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange}/>

<input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange}/>

<input className="form-control mb-4" type="password" name="password2" placeholder="Confirm Password" onChange={handleChange}/>

<button className="btn btn-success w-100">

Register

</button>

</form>

<div className="text-center mt-3">

Already have an account?

<Link to="/login">

 Login

</Link>

</div>

</div>

</div>

</div>

</div>

</div>

);

}

export default Register;