import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./courses/course.reducer.js";

const store = configureStore({
    reducer: {
        course : CourseReducer

    }
})

export default store;