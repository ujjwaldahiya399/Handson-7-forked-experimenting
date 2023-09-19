import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Store from "../redux/store/Store";
function Student() {
  const data = useSelector((state) => state.Stu_Data);
  console.log(data);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Students</h1>
      <button onClick={() => navigate("/newstudent")}>Add new Student</button>
      {data.map((item, index) => {
        return (
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="table"
            id={index}
          >
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span>{item.course}</span>
            <span>{item.batch}</span>
            <span>
              <Link state={{ index: index }} to="/editstudent">
                Edit
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}
export default Student;
