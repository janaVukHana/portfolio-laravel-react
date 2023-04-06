import { BrowserRouter, Link, NavLink } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Navbar() {

    const {token, setUser, setToken} = useStateContext()

    const onLogout = (e) => {
        e.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setUser({})
                setToken(null)
            })
    }

    return (
            <nav id="home" className="light-section" style={{flex: '0 1 auto'}}>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? 'active':''} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active':''} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'active':''} to="/dashboard">Dashboard</NavLink></li>
                    {/* <li><Link className="work" to="/dashboard">Dashboard</Link></li> */}
                    {!token &&
                        <li><NavLink className={({isActive}) => isActive ? 'active' : '' } to="/login">Login</NavLink></li>
                    }
                        {/* <li><NavLink className="about-me" to="/login">Login</NavLink></li> */}
                    {token && 
                        <li><a href="#" onClick={onLogout}>Logout</a></li>
                    }
                </ul>
            </nav>        
    )
}