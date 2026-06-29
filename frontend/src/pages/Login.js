import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("token/", {

                username,

                password

            });

            localStorage.setItem("access", response.data.access);

            localStorage.setItem("refresh", response.data.refresh);

            toast.success("Login Successful");

            navigate("/");

            window.location.reload();

        }

        catch {

            toast.error("Invalid Credentials");

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow border-0">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4">

                                Login

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input
                                    className="form-control mb-3"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                />

                                <input
                                    className="form-control mb-4"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />

                                <button className="btn btn-primary w-100">

                                    Login

                                </button>

                            </form>

                            <div className="text-center mt-3">

                                Don't have an account?

                                <Link to="/register">

                                    Register

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;