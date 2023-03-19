import { BrowserRouter, Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Navbar() {

    const {setUser, setToken} = useStateContext()

    const onLogout = (e) => {
        e.preventDefault()
        console.log('logout btn pushed');

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return (
            <nav id="home" className="light-section">
                <ul>
                    <li><Link className="home" to="/">Home</Link></li>
                    {/* <li><a class="home" href="#home">Home</a></li>
                    <li><a class="about-me" href="#about-me">About</a></li>
                    <li><a class="work" href="#work">Work</a></li>
                    <li><a class="my-skills" href="#my-skills">Skills</a></li> */}
                    <li><Link className="about-me" to="/contact">Contact</Link></li>
                    <li><Link className="work" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="about-me" to="/login">Login</Link></li>
                    <li><a href="#" onClick={onLogout}>Logout</a></li>
                </ul>
            </nav>        
    )
}