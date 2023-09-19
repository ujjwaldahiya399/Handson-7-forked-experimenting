import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../slice/Slice";
const Store = configureStore({
  reducer: {
    Stu_Data: studentSlice
  }
});

export default Store;
