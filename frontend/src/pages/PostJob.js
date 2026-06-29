import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function PostJob() {

    const navigate = useNavigate();

    const [job, setJob] = useState({

        title: "",

        company: "",

        location: "",

        salary: "",

        job_type: "FULL_TIME",

        description: ""

    });

    const handleChange = (e) => {

        setJob({

            ...job,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("jobs/", job);

            toast.success("Job Posted Successfully");

            navigate("/my-jobs");

        }

        catch {

            toast.error("Unable to Post Job");

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0">

                        <div className="card-body p-5">

                            <h2 className="mb-4">

                                Post New Job

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input className="form-control mb-3" name="title" placeholder="Job Title" onChange={handleChange} />

                                <input className="form-control mb-3" name="company" placeholder="Company" onChange={handleChange} />

                                <input className="form-control mb-3" name="location" placeholder="Location" onChange={handleChange} />

                                <input className="form-control mb-3" name="salary" placeholder="Salary" onChange={handleChange} />

                                <select className="form-select mb-3" name="job_type" onChange={handleChange}>

                                    <option value="FULL_TIME">Full Time</option>

                                    <option value="PART_TIME">Part Time</option>

                                    <option value="REMOTE">Remote</option>

                                    <option value="INTERNSHIP">Internship</option>

                                </select>

                                <textarea className="form-control mb-4" rows="6" name="description" placeholder="Description" onChange={handleChange}></textarea>

                                <button className="btn btn-success w-100">

                                    Post Job

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PostJob;