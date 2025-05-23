import useSWR from "swr";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Loader from "../loader/loader.jsx";
import { enrollStudent, getNotEnrolledCourses } from "../../services/course.service.js";
import "./course-enrollment-modal.css"

export default function CourseEnrollmentModal({ studentId, onClose, onCourseEnrolled }) {
    const { data, error, isLoading } = useSWR('/api/courses/', () => getNotEnrolledCourses(studentId));
    const [courseConcerned, setCourseConcerned] = useState()
    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    const handleStudentSub = async (e) => {
        e.preventDefault();
        if (!courseConcerned) return;
        await enrollStudent(studentId, courseConcerned);
        onCourseEnrolled();
        onClose();
    }
    if (isLoading) return <Loader />

    return <div onClick={onClose} className="modal-backdrop">
        <div className="modal-content" onClick={handleModalClick}>
            <div className="modal-header">
                <h2 className="sub-title-modal">Enroll a Course</h2>
                <button onClick={onClose} className="close-button"><XCircle color="red" size={40}></XCircle></button>
            </div>
            <form onSubmit={handleStudentSub}>
                <div className="form-group">
                    <select id="select-courses" value={courseConcerned} onChange={(e) => setCourseConcerned(e.target.value)}>
                        {data.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
                    </select>
                </div>
                <div className="container-action-sub">
                    <button type="submit" id="btn-enroll-course">Enroll</button>
                </div>
            </form>
        </div>

    </div>
}