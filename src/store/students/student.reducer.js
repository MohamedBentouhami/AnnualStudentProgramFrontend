import { createReducer } from "@reduxjs/toolkit"
import { studentsFetch } from "./student.action.js";

const initialState = {
    isLoading: false,
    students: [],
    error: undefined,
    hasBeenFetched: false
}

const StudentReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(studentsFetch.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(studentsFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.students = action.payload;
            state.hasBeenFetched = true;
        })
        .addCase(studentsFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? "Failed to fetch students"
        })
})

export default StudentReducer;