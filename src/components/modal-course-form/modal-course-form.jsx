import { addCourse } from '../../services/course.service.js';
import { XCircle } from "@phosphor-icons/react";
import './modal-course-form.css'
import { useDispatch } from 'react-redux';
import { createCourse } from '../../store/courses/course.action.js';


export default function ModalCourseForm({ onClose }) {
    const dispatch = useDispatch();

    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    const handleAddCourse = async (formData) => {
        const code = formData.get("course-code");
        const title = formData.get("course-title");
        const etc = formData.get("course-etc");
        const newCourse = await addCourse(code, title, etc);
        dispatch(createCourse(newCourse));
        onClose();
    }

    return <div onClick={onClose} className="modal-backdrop">
        <div className='modal-content' onClick={handleModalClick}>
            <div className='modal-header'>
                <h3>Add a course</h3>
                <button onClick={onClose} className='close-button'><XCircle color='red' size={40} /></button>
            </div>
            <form className='course-form' action={handleAddCourse}>
                <div className='form-group'>
                    <label htmlFor="course-code">Code</label>
                    <input type="text" id='course-code' name='course-code' placeholder='Enter a course code' />
                </div>
                <div className="form-group">
                    <label htmlFor="course-title">Title</label>
                    <input type="text" id='course-title' name='course-title' placeholder='Enter a title code' />
                </div>
                <div className="form-group">
                    <label htmlFor="course-etc">Etc</label>
                    <input type="number" min={1} id='course-etc' name='course-etc' />
                </div>
                <div className='form-actions'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>

    </div>
}