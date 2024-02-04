import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Posts/postslice";
import userReducer from "../features/Users/userSlice"

const store = configureStore({
  reducer: {
    post: postReducer,
    users: userReducer
  },
});

export default store;
