import useSWR from "swr"
import { getCourses } from "../../services/course.service.js"
import Loader from "../../components/loader/loader.jsx"
import "./display-courses.css"
import { NavLink, useNavigate } from "react-router-dom"

export default function DisplayCourses() {
    const { data, error, isLoading } = useSWR('/api/courses', getCourses)
    let navigate = useNavigate();

    const handleDetailCourse = (id) => {
        navigate(`/courses/${id}`)
    }

    if (error) return (<div><p className="msg">Failed to load courses</p></div>)
    if (isLoading) return <Loader />
    if (Array.isArray(data) && data.length === 0) return <p className="msg">No courses available.</p>
    return <div className="courses-container">
        <h1 className="courses-title">Courses List</h1>
        <table className="courses-table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>ECTS</th>
                </tr>
            </thead>
            <tbody>
                {data.map((course) =>
                    <tr key={course.id} onClick={() => handleDetailCourse(course.id)}>
                        <td>{course.code}</td>
                        <td>{course.title}</td>
                        <td>{course.etc}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}