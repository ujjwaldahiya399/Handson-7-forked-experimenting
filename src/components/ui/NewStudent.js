import React from "react";
import { useNavigate } from "react-router-dom";
function NewStudent() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>NewStudent</h1>
      <button onClick={() => navigate("/student")}>ADD</button>
    </div>
  );
}
export default NewStudent;
