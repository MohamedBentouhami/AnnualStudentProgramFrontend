import useSWR from "swr"
import { getCourses } from "../../../services/course.service.js"
import Loader from "../../../components/loader/loader.jsx"

export default function DisplayCourses() {
    const { data, error, isLoading } = useSWR('/api/courses', getCourses)

    if (error) return (<div><p>Failed to load courses</p></div>)
    if (isLoading) return <Loader />
    if (Array.isArray(data) && data.length === 0) return <p>No courses available.</p>
    return <div>
        <h1>Courses List</h1>
        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>ECTS</th>
                </tr>
            </thead>
            <tbody>
                {data.map((course) => <tr key={course.id}>
                    <td>{course.code}</td>
                    <td>{course.title}</td>
                    <td>{course.etc}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
}