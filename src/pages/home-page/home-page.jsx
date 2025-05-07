import { NavLink } from "react-router-dom"
import "./home-page.css"

export default function HomePage() {

    const navToCoursesList = () => {

    }

    return <div className="welcome-container">

        <p className="title">🌟 Welcome to The Ultimate Student Program! 🌟
        </p>
        <p className="text">
            Congratulations on embarking on a journey of growth, learning, and endless possibilities! This program is
            designed
            to equip you with the skills, knowledge, and experiences needed to shape your future. 🚀</p>
        <div>
            <NavLink to="/courses">
                <button className="btn">Courses List
                </button>
            </NavLink>
            <NavLink to="/students">
                <button className="btn"><NavLink> </NavLink>Students List</button>
            </NavLink>
        </div>
    </div>
}