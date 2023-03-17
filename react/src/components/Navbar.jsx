import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar() {

    return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/login'>Login</Link>
                <Link to='/dashboard'>Dashboard</Link>
            </div>        
    )
}