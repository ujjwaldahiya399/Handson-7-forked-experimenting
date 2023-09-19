import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { editStd } from "../redux/slice";
import { addStd } from "../redux/slice";
function EditStudent() {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataFromLoc = useLocation().state.index;
  const data = useSelector((state) => state.Stu_Data[dataFromLoc]);
  console.log(data);
  const changeHandler = (e) => {
    console.log("changed");
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const updateClickHandler = () => {
    console.log(info);
    dispatch(editStd({ info, index }));
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
            // value={data.name}
            id="name"
            type="text"
          />
        </label>
        <label>
          Age:
          <input
            onChange={changeHandler}
            // value={data.age}
            id="name"
            type="number"
          />
        </label>
        <label>
          Course:
          <input
            onChange={changeHandler}
            // value={data.course}
            id="name"
            type="text"
          />
        </label>

        <label>
          Batch:
          <input
            onChange={changeHandler}
            // value={data.batch}
            id="name"
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
