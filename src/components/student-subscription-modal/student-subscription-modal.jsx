import useSWR from "swr";
import { getNotSubscribedStudents } from "../../services/student.service.js";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Loader from "../loader/loader.jsx";
import { enrollStudent } from "../../services/course.service.js";
import "./student-subscription-modal.css"

export default function StudentSubscriptionModal({ courseId, onClose, onStudentSubscribed }) {
    const { data, error, isLoading } = useSWR('/api/students/', () => getNotSubscribedStudents(courseId));
    const [studentConcerned, setStudentConcerned] = useState()
    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    const handleStudentSub = async (e) => {
        e.preventDefault();
        if(!studentConcerned) return;
        await enrollStudent(studentConcerned, courseId)
        onStudentSubscribed();
        onClose();
    }
    if (isLoading) return <Loader />

    return <div onClick={onClose} className="modal-backdrop">
        <div className="modal-content" onClick={handleModalClick}>
            <div className="modal-header">
                <h2 className="sub-title-modal">Subscribe a Student</h2>
                <button onClick={onClose} className="close-button"><XCircle color="red" size={40}></XCircle></button>
            </div>
            <form onSubmit={handleStudentSub}>
                <div className="form-group">
                    <select id="select-students" value={studentConcerned} onChange={(e) => setStudentConcerned(e.target.value)}>
                        {data.map(student => <option key={student.id} value={student.id}>{student.name} - {student.section.toLowerCase()}</option>)}
                    </select>
                </div>
                <div className="container-action-sub">

                <button type="submit" id="btn-add-student">Subscribe</button>
                </div>
            </form>
        </div>

    </div>
}