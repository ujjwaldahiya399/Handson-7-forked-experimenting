import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import EditStudent from "./EditStudent";
import Home from "./Home";
import NewStudent from "./NewStudent";
import Student from "./Student";

function RouteCompo() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/student">Student</Link>
      {/* <Link to="/newstudent">AddNewStd</Link> */}
      {/* <Link to="/">Home</Link> */}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/student" Component={Student} />
        <Route path="/newstudent" Component={NewStudent} />
        <Route path="/editstudent" Component={EditStudent} />
      </Routes>
    </div>
  );
}
export default RouteCompo;
