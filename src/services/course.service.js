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
    return response.data;
}

export async function getStudentsByCourse(courseId) {
    const response = await courseService.get(`/${courseId}/students`);
    return response.data;
}

export async function enrollStudent(studentId, courseId) {
    const response = await courseService.patch("/add-student", {
        studentId, courseId
    })
    return response.data
}

export async function getNotEnrolledCourses(studentId) {
    const response = courseService.get(`/not-enrolled/${studentId}`)
    return (await response).data
}