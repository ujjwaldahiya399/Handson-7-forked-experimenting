import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "asdd", age: 34, course: "dsd", batch: "ea23" },
  { name: "bf", age: 34, course: "dsdcd", batch: "ea23" },
  { name: "vfg", age: 34, course: "xxx", batch: "ea23" },
  { name: "qqq", age: 34, course: "bnnm", batch: "ea23" },
];
const studentSlice = createSlice({
  name: "stu_details",
  initialState,
  reducers: {
    editStd: (state, action) => {
      state[action.payload.index] = action.payload.info;
    },
    addStd: (state, action) => {},
  },
});
export const { editStd, addStd } = studentSlice.actions;
export default studentSlice.reducer;
