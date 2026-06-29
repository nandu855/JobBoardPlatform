import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function EditJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [job, setJob] = useState({});

    useEffect(() => {

        api.get(`jobs/${id}/`)

            .then(res => setJob(res.data));

    }, [id]);

    const handleChange = (e) => {

        setJob({

            ...job,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`jobs/${id}/`, job);

            toast.success("Job Updated");

            navigate("/my-jobs");

        }

        catch {

            toast.error("Update Failed");

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0">

                        <div className="card-body p-5">

                            <h2 className="mb-4">

                                Edit Job

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input className="form-control mb-3" name="title" value={job.title || ""} onChange={handleChange} />

                                <input className="form-control mb-3" name="company" value={job.company || ""} onChange={handleChange} />

                                <input className="form-control mb-3" name="location" value={job.location || ""} onChange={handleChange} />

                                <input className="form-control mb-3" name="salary" value={job.salary || ""} onChange={handleChange} />

                                <select className="form-select mb-3" name="job_type" value={job.job_type || ""} onChange={handleChange}>

                                    <option value="FULL_TIME">Full Time</option>

                                    <option value="PART_TIME">Part Time</option>

                                    <option value="REMOTE">Remote</option>

                                    <option value="INTERNSHIP">Internship</option>

                                </select>

                                <textarea className="form-control mb-4" rows="6" name="description" value={job.description || ""} onChange={handleChange}></textarea>

                                <button className="btn btn-primary w-100">

                                    Update Job

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EditJob;