import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function MyJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        api.get("jobs/my_jobs/")
            .then((res) => setJobs(res.data))
            .catch((err) => console.log(err));
    };

    const deleteJob = async (id) => {

        if (!window.confirm("Delete this job?")) return;

        try {

            await api.delete(`jobs/${id}/`);

            toast.success("Job Deleted");

            fetchJobs();

        }

        catch {

            toast.error("Delete Failed");

        }

    };

    return (

        <div className="container py-5">

            <h1 className="mb-4 text-center">

                My Jobs

            </h1>

            <div className="row">

                {

                    jobs.length === 0 ?

                    (

                        <div className="text-center">

                            <h4>No Jobs Posted</h4>

                        </div>

                    )

                    :

                    jobs.map((job)=>(

                        <div className="col-lg-4 mb-4" key={job.id}>

                            <div className="card shadow border-0 h-100">

                                <div className="card-body">

                                    <h4>{job.title}</h4>

                                    <hr/>

                                    <p><strong>Company:</strong> {job.company}</p>

                                    <p><strong>Location:</strong> {job.location}</p>

                                    <p><strong>Salary:</strong> ₹{job.salary}</p>

                                    <span className="badge bg-success">

                                        {job.job_type}

                                    </span>

                                </div>

                                <div className="card-footer bg-white border-0">

                                    <Link
                                        to={`/edit-job/${job.id}`}
                                        className="btn btn-primary me-2"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger"
                                        onClick={()=>deleteJob(job.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default MyJobs;