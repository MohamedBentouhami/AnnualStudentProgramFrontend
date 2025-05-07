import NavBar from "../../components/nav-bar/nav-bar.jsx";
import logo from "../../assets/logo.png"
import "./header.css"
export default function Header() {
    return <header className="header">
        <div className="logo">
            <img src={logo}></img>
            <p>Annual Program Student</p>
        </div>
        <NavBar />
    </header>
}