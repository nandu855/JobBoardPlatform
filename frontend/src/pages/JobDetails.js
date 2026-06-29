import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function JobDetails() {

    const { id } = useParams();

    const [job, setJob] = useState(null);

    useEffect(() => {

        api.get(`jobs/${id}/`)
            .then((response) => {
                setJob(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [id]);

    if (!job) {

        return (

            <div className="container text-center mt-5">

                <div className="spinner-border text-primary"></div>

            </div>

        );

    }

    return (

        <div className="container py-5">

            <div className="card shadow border-0">

                <div className="card-body p-5">

                    <h1>{job.title}</h1>

                    <hr />

                    <div className="row">

                        <div className="col-md-6">

                            <p>

                                <strong>🏢 Company:</strong>

                                {" "}

                                {job.company}

                            </p>

                            <p>

                                <strong>📍 Location:</strong>

                                {" "}

                                {job.location}

                            </p>

                            <p>

                                <strong>💰 Salary:</strong>

                                ₹{job.salary}

                            </p>

                        </div>

                        <div className="col-md-6">

                            <p>

                                <strong>Employer:</strong>

                                {" "}

                                {job.employer}

                            </p>

                            <span className="badge bg-success fs-6">

                                {job.job_type}

                            </span>

                        </div>

                    </div>

                    <hr />

                    <h3>Job Description</h3>

                    <p className="mt-3">

                        {job.description}

                    </p>

                    <Link to={`/apply/${job.id}`}>

                        <button className="btn btn-success btn-lg mt-4">

                            Apply Now

                        </button>

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default JobDetails;