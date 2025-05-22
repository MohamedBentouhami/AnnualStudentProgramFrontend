import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom"
import useSWR from "swr";
import { selectStudentName } from "../../store/students/student.selector.js";
import { CoursesTable } from "../../components/courses-table/courses-table.jsx";
import Loader from "../../components/loader/loader.jsx";
import {getCoursesByStudents} from "../../services/student.service.js";
import "./student-detail-page.css"

export function StudentDetailPage() {
    const { id } = useParams();
    const title = useSelector(state => selectStudentName(state, id));
    const { data, error, isLoading } = useSWR('api/students', () => getCoursesByStudents(id))
    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader></Loader>

    return <div className="student-detail-container">
        <h1 className="student-detail-title">
            Courses of {title}
        </h1>
        <CoursesTable courses={data}></CoursesTable>
        <NavLink to="/students" className="back-btn">Back</NavLink>
    </div>
}