import { NavLink } from "react-router-dom"
import "./courses-table.css"
export function CoursesTable({ courses }) {
    return <table className="courses-table">
        <thead>
            <tr>
                <th>Code</th>
                <th>Title</th>
                <th>ECTS</th>
            </tr>
        </thead>
        <tbody>
            {courses.map((course) =>
                <tr key={course.id}>
                    <td>{course.code}</td>
                    <td ><NavLink id="link-detail" to={`/courses/${course.id}`}>{course.title}</NavLink></td>
                    <td>{course.etc}</td>
                </tr>
            )}
        </tbody>
    </table>
}