import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Loader from "../../components/loader/loader.jsx"
import { coursesFetch } from "../../store/courses/course.action.js"
import "./display-courses.css"

export default function DisplayCourses() {

    const dispatch = useDispatch();
    const { isLoading, courses, error, hasBeenFetched } = useSelector((state) => state.course);
    useEffect(() => {
        if (!hasBeenFetched) {
            dispatch(coursesFetch());
        }
    }, [hasBeenFetched])

    let navigate = useNavigate();
    const handleDetailCourse = (id) => {
        navigate(`/courses/${id}`)
    }

    if (error) return (<div><p className="msg">Failed to load courses</p></div>)
    if (isLoading) return <Loader />
    if (Array.isArray(courses) && courses.length === 0) return <p className="msg">No courses available.</p>
    return <div className="courses-container">
        <h1 className="courses-title">Courses List</h1>
        <table className="courses-table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Title</th>
                    <th>ECTS</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) =>
                    <tr key={course.id} onClick={() => handleDetailCourse(course.id)}>
                        <td>{course.code}</td>
                        <td>{course.title}</td>
                        <td>{course.etc}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}