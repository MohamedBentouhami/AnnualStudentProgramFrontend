import { NavLink } from "react-router-dom";

import "./nav-bar.css"
import { ChalkboardSimple, House, Student } from "@phosphor-icons/react";

export default function NavBar() {
    return <ul className="nav-bar">
        <li> <NavLink to="/">
            <House />Home</NavLink></li>
        <li> <NavLink to="/courses"><ChalkboardSimple />Courses</NavLink></li>
        <li> <NavLink to="/students"> <Student />Students</NavLink></li>
    </ul>
}