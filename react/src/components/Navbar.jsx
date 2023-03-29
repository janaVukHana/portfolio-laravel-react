import { BrowserRouter, Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Navbar() {

    const {token, setUser, setToken} = useStateContext()

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
            <nav id="home" className="light-section" style={{flex: '0 1 auto'}}>
                <ul>
                    <li><Link className="home" to="/">Home</Link></li>
                    <li><Link className="about-me" to="/contact">Contact</Link></li>
                    <li><Link className="work" to="/dashboard">Dashboard</Link></li>
                    {!token &&
                        <li><Link className="about-me" to="/login">Login</Link></li>
                    }
                    {token && 
                        <li><a href="#" onClick={onLogout}>Logout</a></li>
                    }
                </ul>
            </nav>        
    )
}