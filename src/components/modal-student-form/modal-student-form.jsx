import { XCircle } from "@phosphor-icons/react";
import './modal-student-form'
import { useDispatch } from 'react-redux';
import "./modal-student-form.css"
import { addStudent } from "../../services/student.service.js";
import { addNewStudent } from "../../store/students/student.action.js";


export default function ModalStudentForm({ onClose }) {
    const dispatch = useDispatch();

    const handleModalClick = (e) => {
        e.stopPropagation();
    }
    const handleAddStudent = async (formData) => {
        const name = formData.get("student-name");
        const gender = formData.get("student-gender");
        const section = formData.get("section-student");

        const newStudent = await addStudent(name, gender, section);
        dispatch(addNewStudent(newStudent));
        onClose();
    }

    return <div onClick={onClose} className="modal-backdrop">
        <div className='modal-content' onClick={handleModalClick}>
            <div className='modal-header'>
                <h3>Add student</h3>
                <button onClick={onClose} className='close-button'><XCircle color='red' size={40} /></button>
            </div>
            <form className='student-form' action={handleAddStudent}>
                <div className='form-group'>
                    <label htmlFor="student-name">Name</label>
                    <input type="text" id="student-name" name='student-name' placeholder='Enter the name of the student' />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div>
                        <input type="radio" id='male-gender' name='student-gender' value="MALE" />Male
                        <input type="radio" id='female-gender' name='student-gender' value="FEMALE" />Female
                    </div>
                </div>
                <div className="form-group">
                    <label>Section</label>
                    <div>
                        <input type="radio" id='section-1' name='section-student' value="MANAGEMENT" />Management
                        <input type="radio" id='section-2' name='section-student' value="NETWORK" />Network
                        <input type="radio" id='section-3' name='section-student' value="INDUSTRIAL" />Industrial
                    </div>
                </div>
                <div className='form-actions'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>

    </div>
}