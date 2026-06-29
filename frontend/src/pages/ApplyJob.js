import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function ApplyJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [coverLetter,setCoverLetter]=useState("");

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            await api.post("applications/",{

                job:id,

                cover_letter:coverLetter

            });

            toast.success("Application Submitted");

            navigate("/my-applications");

        }

        catch{

            toast.error("Submission Failed");

        }

    };

    return(

<div className="container py-5">

<div className="row justify-content-center">

<div className="col-lg-8">

<div className="card shadow border-0">

<div className="card-body p-5">

<h2 className="mb-4">

Apply For This Job

</h2>

<form onSubmit={handleSubmit}>

<textarea

className="form-control mb-4"

rows="8"

placeholder="Write your cover letter..."

value={coverLetter}

onChange={(e)=>setCoverLetter(e.target.value)}

required

/>

<button className="btn btn-success w-100">

Submit Application

</button>

</form>

</div>

</div>

</div>

</div>

</div>

);

}

export default ApplyJob;