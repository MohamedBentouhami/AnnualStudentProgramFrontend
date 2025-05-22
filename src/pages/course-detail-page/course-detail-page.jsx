import { NavLink, useParams } from "react-router-dom"
import useSWR from "swr";
import { getStudentsByCourse } from "../../services/course.service.js";
import { useSelector } from "react-redux";
import { selectCourseTitleById } from "../../store/courses/course.selector.js";
import Loader from "../../components/loader/loader.jsx";
import StudentsTable from "../../components/students-table/students-table.jsx";
import "./course-detail-page.css"
import { useState } from "react";
import StudentSubscriptionModal from "../../components/student-subscription-modal/student-subscription-modal.jsx";

export default function CourseDetailPage() {
    const { id } = useParams();
    const title = useSelector(state => selectCourseTitleById(state, id));
    const { data, error, isLoading, mutate } = useSWR(`api/courses/`, () => getStudentsByCourse(id));
    const [isOpenModalSub, setOpenModalSub] = useState(false);

    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader></Loader>
    return <div className="course-detail-container">
        <h1 className="course-detail-title">
            {title}
        </h1>
        <StudentsTable students={data}></StudentsTable>
        <div className="action-detail-course">
            <NavLink to="/courses" className="back-btn">Back</NavLink>
            <a className="back-btn" onClick={() => setOpenModalSub(true)}>Subscribe a Student</a>
        </div>
        {isOpenModalSub && <StudentSubscriptionModal
            courseId={id}
            onClose={() => setOpenModalSub(false)}
            onStudentSubscribed={mutate}>
        </StudentSubscriptionModal>}
    </div>
}