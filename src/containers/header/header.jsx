import NavBar from "../../components/nav-bar/nav-bar.jsx";
import logo from "../../assets/logo.png"
import "./header.css"
import LangSelect from "../../components/lang-select/lang-select.jsx";
export default function Header() {
    return <header className="header">
        <div className="logo">
            <img src={logo}></img>
            <p>Annual Program Student</p>
        </div>
        <NavBar />
        <div>
            <LangSelect />
        </div>
    </header>
}