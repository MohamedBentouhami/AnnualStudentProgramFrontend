import { addCourse } from '../../services/course.service.js';
import { XCircle } from "@phosphor-icons/react";
import './modal-student-form'
import { useDispatch } from 'react-redux';


export default function ModalStudentForm({ onClose }) {
    const dispatch = useDispatch();

    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    const handleAddCourse = async (formData) => {
        const name = formData.get("course-code");
        const gender = formData.get("course-title");
        const section = formData.get("course-etc");
        const newStudent = await addCourse(code, title, etc);
        dispatch(createCourse(newCourse));
        onClose();
    }

    return <div onClick={onClose} className="modal-backdrop">
        <div className='modal-content' onClick={handleModalClick}>
            <div className='modal-header'>
                <h3>Add student</h3>
                <button onClick={onClose} className='close-button'><XCircle color='red' size={40} /></button>
            </div>
            <form className='student-form' action={handleAddCourse}>
                <div className='form-group'>
                    <label htmlFor="student-name">Name</label>
                    <input type="text" id="student-name" name='student-name' placeholder='Enter the name of the student' />
                </div>
                <div className="form-group">
                    <label htmlFor="student-gender">Gender</label>
                    <div>
                        <input type="radio" id='student-gender' name='student-gender' />Male
                        <input type="radio" id='student-gender' name='student-gender' />Female
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="student-section">Section</label>
                    <div>
                        <input type="radio" id='course-etc' name='section-student' />Management
                        <input type="radio" id='course-etc' name='section-student' />Network
                        <input type="radio" id='course-etc' name='section-student' />Management
                    </div>
                </div>
                <div className='form-actions'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>

    </div>
}