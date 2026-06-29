import { Link } from "react-router-dom";

function JobCard({ job }) {

    return (

        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
        >

            <h2>{job.title}</h2>

            <p>
                <strong>Company:</strong> {job.company}
            </p>

            <p>
                <strong>Location:</strong> {job.location}
            </p>

            <p>
                <strong>Salary:</strong> ₹{job.salary}
            </p>

            <p>
                <strong>Job Type:</strong> {job.job_type}
            </p>

            <p>{job.description}</p>

            <Link to={`/jobs/${job.id}`}>

                <button
                    style={{
                        background: "#1976d2",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    View Details
                </button>

            </Link>

        </div>

    );

}

export default JobCard;