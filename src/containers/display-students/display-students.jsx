import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { studentsFetch } from "../../store/students/student.action.js";
import Loader from "../../components/loader/loader.jsx";
import "./display-students.css"
import StudentsTable from "../../components/students-table/students-table.jsx";

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

    return  <div className="student-container">
        <h1 className="student-title">List of students</h1>
        <StudentsTable students={students} ></StudentsTable>
        </div>
    
}