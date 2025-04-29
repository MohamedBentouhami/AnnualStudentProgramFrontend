import axios from "axios";

const courseService = axios.create({
    baseURL: "http://localhost:8080/api/courses"
});

export async function getCourses() {
    const response = await courseService.get("/");
    return response.data;
}