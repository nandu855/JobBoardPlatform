import { BrowserRouter,Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import EditJob from "./pages/EditJob";
import MyJobs from "./pages/MyJobs";
import ApplyJob from "./pages/ApplyJob";
import MyApplications from "./pages/MyApplications";
import Profile from "./pages/Profile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){

return(

<BrowserRouter>

<Navbar/>

<ToastContainer position="top-right"/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/jobs" element={<JobList/>}/>

<Route path="/jobs/:id" element={<JobDetails/>}/>

<Route path="/post-job" element={<PostJob/>}/>

<Route path="/edit-job/:id" element={<EditJob/>}/>

<Route path="/my-jobs" element={<MyJobs/>}/>

<Route path="/apply/:id" element={<ApplyJob/>}/>

<Route path="/my-applications" element={<MyApplications/>}/>

<Route path="/profile" element={<Profile/>}/>

</Routes>

<Footer/>

</BrowserRouter>

);

}

export default App;