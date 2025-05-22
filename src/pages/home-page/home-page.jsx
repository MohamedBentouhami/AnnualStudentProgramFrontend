import { NavLink, useNavigate } from "react-router-dom"
import "./home-page.css"

export default function HomePage() {
    let navigate = useNavigate();
    const navToCoursesList = () => {
        navigate("/courses")
    }
    const navToStudentsList = () => {
        navigate("/students")
    }


    return <div className="welcome-container">

        <p className="title">🌟 Welcome to The Ultimate Student Program! 🌟
        </p>
        <p className="text">
            Congratulations on embarking on a journey of growth, learning, and endless possibilities! This program is
            designed
            to equip you with the skills, knowledge, and experiences needed to shape your future. 🚀</p>
        <div>
            <button className="btn" onClick={navToCoursesList}>
                Courses List
            </button>
            <button className="btn" onClick={navToStudentsList}>
                Students List
            </button>
        </div>
    </div>
}