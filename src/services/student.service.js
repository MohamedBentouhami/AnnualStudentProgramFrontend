import axios from "axios";

const studentService = axios.create({
    baseURL: 'http://localhost:8080/api/students'
});

export async function getStudents() {
    const response = await studentService.get("");
    return response.data;
}

export async function addStudent(name, gender, section) {
    const response = await studentService.post("/create", {
        name,
        gender,
        section
    })
    return response.data;
}

export async function getCoursesByStudents(studentId) {
    const response = await studentService.get(`${studentId}/courses`);
    return response.data;
}

export async function getNotSubscribedStudents(courseId) {
    const response = await studentService.get(`/not-subscribed/${courseId}`)
    return response.data;
}