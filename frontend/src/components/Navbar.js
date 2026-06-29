import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate=useNavigate();

const loggedIn=localStorage.getItem("access");

const logout=()=>{

localStorage.clear();

navigate("/");

window.location.reload();

}

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

<div className="container">

<Link className="navbar-brand fw-bold fs-3" to="/">

💼 Job Board

</Link>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#nav"
>

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse" id="nav">

<ul className="navbar-nav me-auto">

<li className="nav-item">

<Link className="nav-link" to="/">Home</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/jobs">Jobs</Link>

</li>

{loggedIn&&(

<>

<li className="nav-item">

<Link className="nav-link" to="/post-job">

Post Job

</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/my-jobs">

My Jobs

</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/my-applications">

Applications

</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/profile">

Profile

</Link>

</li>

</>

)}

</ul>

<div>

{!loggedIn?(

<>

<Link
to="/login"
className="btn btn-light me-2"
>

Login

</Link>

<Link
to="/register"
className="btn btn-warning"
>

Register

</Link>

</>

):(

<button
className="btn btn-danger"
onClick={logout}
>

Logout

</button>

)}

</div>

</div>

</div>

</nav>

);

}

export default Navbar;