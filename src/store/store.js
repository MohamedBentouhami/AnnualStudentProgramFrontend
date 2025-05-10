import { configureStore } from "@reduxjs/toolkit";
import CourseReducer from "./courses/course.reducer.js";
import StudentReducer from "./students/student.reducer.js";

const store = configureStore({
    reducer: {
        course : CourseReducer,
        student: StudentReducer

    }
})

export default store;