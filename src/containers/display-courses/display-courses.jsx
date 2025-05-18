import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Loader from "../../components/loader/loader.jsx"
import { coursesFetch } from "../../store/courses/course.action.js"
import "./display-courses.css"
import { CoursesTable } from "../../components/courses-table/courses-table.jsx"

export default function DisplayCourses() {

    const dispatch = useDispatch();
    const { isLoading, courses, error, hasBeenFetched } = useSelector((state) => state.course);
    useEffect(() => {
        if (!hasBeenFetched) {
            dispatch(coursesFetch());
        }
    }, [hasBeenFetched])

    if (error) return (<div><p className="msg">Failed to load courses</p></div>)
    if (isLoading) return <Loader />
    if (Array.isArray(courses) && courses.length === 0) return <p className="msg">No courses available.</p>
    return <div className="courses-container">
        <h1 className="courses-title">Courses List</h1>
        <CoursesTable courses={courses}></CoursesTable>
    </div>
}