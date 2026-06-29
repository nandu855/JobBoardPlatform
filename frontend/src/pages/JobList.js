import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function JobList() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchJobs();

    }, []);

    const fetchJobs = () => {

        api.get("jobs/")
            .then((response) => {

                setJobs(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    };

    const filteredJobs = jobs.filter((job) =>

        job.title.toLowerCase().includes(search.toLowerCase()) ||

        job.company.toLowerCase().includes(search.toLowerCase()) ||

        job.location.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <div className="container py-5">

            <div className="row mb-4">

                <div className="col-md-12 text-center">

                    <h1 className="fw-bold">

                        Available Jobs

                    </h1>

                    <p className="text-muted">

                        Browse jobs posted by top companies.

                    </p>

                </div>

            </div>

            <div className="row justify-content-center mb-5">

                <div className="col-md-8">

                    <input

                        type="text"

                        className="form-control form-control-lg"

                        placeholder="🔍 Search by title, company or location..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />

                </div>

            </div>

            <div className="row">

                {

                    filteredJobs.length === 0 ?

                        (

                            <div className="text-center">

                                <h4>No Jobs Found</h4>

                            </div>

                        )

                        :

                        (

                            filteredJobs.map((job) => (

                                <div

                                    className="col-lg-4 col-md-6 mb-4"

                                    key={job.id}

                                >

                                    <div className="card h-100 shadow border-0">

                                        <div className="card-body">

                                            <h4 className="card-title">

                                                {job.title}

                                            </h4>

                                            <hr />

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

                                                {" "}

                                                ₹{job.salary}

                                            </p>

                                            <span className="badge bg-success mb-3">

                                                {job.job_type}

                                            </span>

                                            <p className="text-muted">

                                                {

                                                    job.description.length > 100

                                                        ?

                                                        job.description.substring(0, 100) + "..."

                                                        :

                                                        job.description

                                                }

                                            </p>

                                        </div>

                                        <div className="card-footer bg-white border-0">

                                            <Link

                                                to={`/jobs/${job.id}`}

                                                className="btn btn-primary w-100"

                                            >

                                                View Details

                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            ))

                        )

                }

            </div>

        </div>

    );

}

export default JobList;