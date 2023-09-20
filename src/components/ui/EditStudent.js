import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
// import { editStd } from "../redux/slice";
// import { addStd } from "../redux/slice";
import {editStd} from "../redux/slice/Slice";
function EditStudent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataFromLoc = useLocation().state.index;
  const data = useSelector((state) => state.Stu_Data[dataFromLoc]);
  // console.log(data);
  const [info, setInfo] = useState({
    name: data.name,
    age: data.age,
    course: data.course,
    batch: data.batch,
  });
  const changeHandler = (e) => {
    console.log("changed");
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const updateClickHandler = () => {
    console.log(info);
    dispatch(editStd({ info, dataFromLoc }));
    navigate("/student");
  };
  return (
    <div>
      <h1>EditStudent</h1>
      <form>
        <label>
          Name:
          <input
            onChange={changeHandler}
            placeholder={data.name}
            id="name"
            type="text"
            name="name"
          />
        </label>
        <label>
          Age:
          <input
            onChange={changeHandler}
            // value={data.age}
            id="name"
            placeholder={data.age}
            name="age"
            type="number"
          />
        </label>
        <label>
          Course:
          <input
            onChange={changeHandler}
            // value={data.course}
            id="name"
            name="course"
            type="text"
            placeholder={data.course}
          />
        </label>

        <label>
          Batch:
          <input
            onChange={changeHandler}
            placeholder={data.batch}
            // value={data.batch}
            id="name"
            name="batch"
            type="text"
          />
        </label>
      </form>
      <button onClick={updateClickHandler}>UPDATE</button>
      <button onClick={() => navigate("/student")}>BACK</button>
    </div>
  );
}
export default EditStudent;
