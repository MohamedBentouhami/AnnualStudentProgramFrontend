import axios from "axios";

const courseService = axios.create({
    baseURL: "http://localhost:8080/api/courses"
});

export async function getCourses() {
    const response = await courseService.get("");
    return response.data;
}

export async function addCourse(code, title, etc) {
    const response = await courseService.post("/create", {
        code,
        title,
        etc
    })
    console.log(response.data)
    return response.data;
}