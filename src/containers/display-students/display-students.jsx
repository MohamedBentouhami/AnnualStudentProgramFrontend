import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { studentsFetch } from "../../store/students/student.action.js";
import Loader from "../../components/loader/loader.jsx";
import "./display-students.css"

export default function DisplayStudents() {
    const dispatch = useDispatch();
    const { isLoading, students, error, hasBeenFetched } = useSelector((state) => state.student);

    useEffect(() => {
        if (!hasBeenFetched) {
            dispatch(studentsFetch());
        }
    }, [hasBeenFetched])

    if (error) return (<div><p className="msg">Failed to load students</p></div>)
    if (isLoading) return <Loader />
    if (Array.isArray(students) && students.length === 0) return <p className="msg">No students available.</p>

    return <div className="student-container">
        <h1 className="student-title">List of students</h1>
        <table className="students-table">
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
                        <td>{student.name}</td>
                        <td>{student.gender.charAt(0)}</td>
                        <td>{student.section}</td>
                    </tr>
                })}
            </tbody>

        </table>
    </div>
}