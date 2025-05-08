import axios from "axios";

const studentService = axios.create({
    baseURL: 'http://localhost:8080/api/students'
});

export default async function getStudents(){
    const response = await studentService.get("");
    return response.data;
}