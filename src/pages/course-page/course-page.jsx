import { useState } from "react";
import DisplayCourses from "../../containers/display-courses/display-courses.jsx";
import ModalCourseForm from "../../components/modal-course-form/modal-course-form.jsx";
import './course-page.css'

export default function CoursePage() {
    const [openModal, setOpenModal] = useState(false);

    return <div>
        <DisplayCourses></DisplayCourses>
        <button onClick={() => setOpenModal(true)} className="add-course-btn">Add course</button>
        {openModal && <ModalCourseForm onClose={() => setOpenModal(false)}></ModalCourseForm>}
    </div>
}