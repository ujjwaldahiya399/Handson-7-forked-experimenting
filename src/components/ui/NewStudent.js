import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStd } from "../redux/slice/Slice";
function NewStudent() {
  const [info,setInfo] = useState({
    name:"",
    age:"",
    course:"",
    batch:""
  })
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setInfo({...info,[e.target.name]:e.target.value})
  }
  let dispatcher = useDispatch();
  const handleAdd = () => {
    console.log(info)
    dispatcher(addStd(info))
    navigate("/student")
  }
  return (
    <div>
      <h1>NewStudent</h1>
      <form>
        <label>
          Name:
          <input
            onChange={changeHandler}
            // placeholder={data.name}
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
            // placeholder={data.age}
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
            // placeholder={data.course}
          />
        </label>

        <label>
          Batch:
          <input
            onChange={changeHandler}
            // placeholder={data.batch}
            // value={data.batch}
            id="name"
            name="batch"
            type="text"
          />
        </label>
      </form>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}
export default NewStudent;
