import { useEffect, useState } from "react";
import api from "../services/api";

function MyApplications() {

    const [applications,setApplications]=useState([]);

    useEffect(()=>{

        api.get("applications/")
            .then((res)=>setApplications(res.data));

    },[]);

    return(

<div className="container py-5">

<h1 className="text-center mb-5">

My Applications

</h1>

<div className="row">

{

applications.length===0?

(

<div className="text-center">

<h4>No Applications Yet</h4>

</div>

)

:

applications.map((app)=>(

<div className="col-lg-6 mb-4" key={app.id}>

<div className="card shadow border-0">

<div className="card-body">

<h3>

Job ID : {app.job}

</h3>

<hr/>

<p>

<strong>Status :</strong>

{" "}

<span className="badge bg-primary">

{app.status}

</span>

</p>

<p>

<strong>Applied :</strong>

{" "}

{new Date(app.applied_at).toLocaleDateString()}

</p>

<p>

<strong>Cover Letter</strong>

</p>

<p>

{app.cover_letter}

</p>

</div>

</div>

</div>

))

}

</div>

</div>

);

}

export default MyApplications;