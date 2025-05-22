import useSWR from "swr";
import { getNotSubscribedStudents } from "../../services/student.service.js";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Loader from "../loader/loader.jsx";
import { addStudentToCourse } from "../../services/course.service.js";

export default function StudentSubscriptionModal({ courseId, onClose, onStudentSubscribed }) {
    const { data, error, isLoading } = useSWR('/api/students/', () => getNotSubscribedStudents(courseId));
    const [studentConcerned, setStudentConcerned] = useState()
    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    const handleStudentSub = async (e) => {
        e.preventDefault();
        if(!studentConcerned) return;
        await addStudentToCourse(studentConcerned, courseId)
        onStudentSubscribed();
        onClose();
    }
    if (isLoading) return <Loader />

    return <div onClick={onClose} className="modal-backdrop">
        <div className="modal-content" onClick={handleModalClick}>
            <div className="modal-header">
                <h3>Subscribe a Student</h3>
                <button onClick={onClose} className="close-button"><XCircle color="red" size={40}></XCircle></button>
            </div>
            <form onSubmit={handleStudentSub}>
                <div className="form-group">
                    <select value={studentConcerned} onChange={(e) => setStudentConcerned(e.target.value)}>
                        {data.map(student => <option key={student.id} value={student.id}>{student.name} - {student.section.toLowerCase()}</option>)}
                    </select>
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </div>

    </div>
}