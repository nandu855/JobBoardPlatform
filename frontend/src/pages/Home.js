import { Link } from "react-router-dom";

function Home() {

    return (

        <>

            {/* Hero Section */}

            <section className="hero">

                <div className="container">

                    <h1>Find Your Dream Job</h1>

                    <p className="mt-4">

                        Search thousands of jobs from the best companies across India.

                    </p>

                    <Link to="/jobs">

                        <button className="btn btn-light btn-lg mt-4">

                            Browse Jobs

                        </button>

                    </Link>

                </div>

            </section>

            {/* Statistics */}

            <div className="container mt-5">

                <div className="row text-center">

                    <div className="col-md-4 mb-4">

                        <div className="card p-4 shadow">

                            <h1 className="text-primary">

                                1500+

                            </h1>

                            <h4>

                                Jobs Available

                            </h4>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card p-4 shadow">

                            <h1 className="text-success">

                                500+

                            </h1>

                            <h4>

                                Companies

                            </h4>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card p-4 shadow">

                            <h1 className="text-danger">

                                3000+

                            </h1>

                            <h4>

                                Candidates

                            </h4>

                        </div>

                    </div>

                </div>

            </div>

            {/* Features */}

            <div className="container">

                <h2 className="section-title">

                    Why Choose Job Board?

                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card p-4 h-100">

                            <h3>

                                🏢 Verified Companies

                            </h3>

                            <p className="mt-3">

                                Browse opportunities from trusted employers.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card p-4 h-100">

                            <h3>

                                ⚡ Easy Apply

                            </h3>

                            <p className="mt-3">

                                Apply to jobs instantly using your account.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card p-4 h-100">

                            <h3>

                                🔒 Secure Platform

                            </h3>

                            <p className="mt-3">

                                JWT authentication keeps your account safe.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Call To Action */}

            <section
                className="py-5 mt-5"
                style={{
                    background: "#0d6efd",
                    color: "white"
                }}
            >

                <div className="container text-center">

                    <h2>

                        Ready To Start Your Career?

                    </h2>

                    <p className="mt-3">

                        Join thousands of professionals finding jobs every day.

                    </p>

                    <Link to="/register">

                        <button className="btn btn-warning btn-lg mt-3">

                            Create Free Account

                        </button>

                    </Link>

                </div>

            </section>

        </>

    );

}

export default Home;