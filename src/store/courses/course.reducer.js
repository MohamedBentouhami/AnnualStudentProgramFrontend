import { createReducer } from "@reduxjs/toolkit"
import { createCourse, coursesFetch } from "./course.action.js";

const initialState = {
    isLoading: false,
    courses: [],
    error: undefined,
    hasBeenFetched: false
}

const CourseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(coursesFetch.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(coursesFetch.fulfilled, (state, action) => {
            state.courses = action.payload;
            state.isLoading = false;
            state.hasBeenFetched = true;
        })
        .addCase(coursesFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? "Failed to fetch courses"
        })
        .addCase(createCourse, (state, action) => {
            state.courses.push(action.payload);
        })

})

export default CourseReducer;