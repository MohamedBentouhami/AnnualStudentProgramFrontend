import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses } from "../../services/course.service.js";

export const coursesFetch = createAsyncThunk('course/fetchCourses', async () => {
    const response = await getCourses();
    return response;
})

export const createCourse = createAction('course/add', (newCourse) => {
    return {
        payload: newCourse
    }
})