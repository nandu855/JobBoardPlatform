function Profile() {

    const username = localStorage.getItem("username") || "User";

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow border-0">

                        <div className="card-body p-5">

                            <div className="text-center">

                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    alt="profile"
                                    width="120"
                                />

                                <h2 className="mt-3">{username}</h2>

                                <p className="text-muted">

                                    Job Board User

                                </p>

                            </div>

                            <hr />

                            <div className="mb-3">

                                <label className="fw-bold">

                                    Username

                                </label>

                                <input
                                    className="form-control"
                                    value={username}
                                    readOnly
                                />

                            </div>

                            <div className="mb-3">

                                <label className="fw-bold">

                                    Role

                                </label>

                                <input
                                    className="form-control"
                                    value="Authenticated User"
                                    readOnly
                                />

                            </div>

                            <button className="btn btn-primary w-100">

                                Update Profile

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;