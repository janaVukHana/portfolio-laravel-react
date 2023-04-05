import { useState } from 'react';
import { Link } from 'react-router-dom';
import Project from "../components/Project";
import Messages from "../components/Messages";

export default function Dashboard() {

    const [showMessages, setShowMessages] = useState(true)
    const handleMessages = () => {
        setShowMessages(true);
    }
    const handleProjects = () => {
        setShowMessages(false)
    }

    return (
        <main id="dashboard" className="dark-section" style={{flex: '1 1 auto'}}>
            <div className="inner-container row">
                <aside className="col">
                    <h2 style={{textAlign: 'left'}}>Btns</h2>
                    <ul>
                        <li><button className='btn-dashboard' onClick={handleMessages}>Messages</button></li>
                        <li><button className='btn-dashboard' onClick={handleProjects}>Projects</button></li>
                    </ul>
                </aside>
                <div className="col" style={{flex: '1 1 auto'}}>
                    {!showMessages && <Project />}
                    {showMessages && <Messages />}
                </div>
            </div>
        </main>
    )
}