import { useState } from "react";
import DisplayStudents from "../../containers/display-students/display-students.jsx";
import ModalStudentForm from "../../components/modal-student-form/modal-student-form.jsx";
import './student-page.css'

export default function StudentPage() {
    const [openModal, setOpenModal] = useState(false);
    return <div className="student-page">
        <DisplayStudents />
        <button className="add-student-btn" onClick={() => setOpenModal(true)}>Add student</button>
        {openModal && <ModalStudentForm onClose={() => setOpenModal(false)} />}
    </div>
}