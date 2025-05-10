import { createAsyncThunk } from "@reduxjs/toolkit";
import getStudents from "../../services/student.service.js";

export const studentsFetch = createAsyncThunk('student/fetchStudents', async () => {
    const response = await getStudents();
    return response;
})