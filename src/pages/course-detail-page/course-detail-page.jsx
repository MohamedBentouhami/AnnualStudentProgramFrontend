import { NavLink, useParams } from "react-router-dom"
import useSWR from "swr";
import { getStudentsByCourse } from "../../services/course.service.js";
import { useSelector } from "react-redux";
import { selectCourseTitleById } from "../../store/courses/course.selector.js";
import Loader from "../../components/loader/loader.jsx";
import StudentsTable from "../../components/students-table/students-table.jsx";
import "./course-detail-page.css"

export default function CourseDetailPage() {
    const { id } = useParams();
    const title = useSelector(state => selectCourseTitleById(state, id));
    const { data, error, isLoading } = useSWR(`api/courses/`, () => getStudentsByCourse(id));
    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader></Loader>
    return <div className="course-detail-container">
        <h1 className="course-detail-title">
            {title}
        </h1>
        <StudentsTable students={data}></StudentsTable>
        <NavLink to="/courses" className="back-btn">Back</NavLink>
    </div>
}