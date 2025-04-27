import NavBar from "../../components/nav-bar/nav-bar.jsx";
import logo  from "../../assets/logo.png"
import "./header.css"
export default function Header() {
    return <header className="header">
        <img src={logo}></img>
        <NavBar />
    </header>
}