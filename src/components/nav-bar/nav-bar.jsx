import { NavLink } from "react-router-dom";

export default function NavBar() {
    return <ul>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/courses">Courses</NavLink></li>
        <li> <NavLink to="/students">Students</NavLink></li>
    </ul>
}