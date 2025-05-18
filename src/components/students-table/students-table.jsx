import { NavLink } from "react-router-dom"
import "./student-table.css"

export default function StudentsTable({ students }) {
    return <table className="students-table">
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Section</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student) => {
                return <tr key={student.id}>
                    <td>{student.id}</td>
                    <td><NavLink id="student-detail" to={`${student.id}`}>{student.name}</NavLink></td>
                    <td>{student.gender.charAt(0)}</td>
                    <td>{student.section}</td>
                </tr>
            })}
        </tbody>

    </table>
}