import { useState, useEffect } from 'react';
import axiosClient from '../axios-client';
import { Link } from 'react-router-dom';
import MessageItem from './MessageItem';

export default function Messages() {

    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = () => {
        setLoading(true)
        axiosClient.get('/contact-us')
            .then(({data}) => {
                setLoading(false)
                setMessages(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <div className="row">
                <h1>My Messages</h1>
            </div>  
            <div className='card animated fadeInDown'>
                {loading && <p>Loading...</p>}
                {!loading && 
                    <table className="messages">
                        <thead>
                            <tr>
                                <th>FROM</th>
                                <th>RECEIVED</th>
                                <th>MORE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages && messages.map(message => (
                                <MessageItem 
                                    key={message.id} 
                                    id={message.id} 
                                    email={message.email} 
                                    fName={message.fName} 
                                    lName={message.lName}
                                    message={message.message}
                                    created_at={message.created_at}
                                    deleteMessage={getMessages}
                                />
                                )) 
                            }
                            {/* Show message if there is 0 projects to show */}
                            {messages.length < 1 && <tr><td>No messages for now!</td></tr>}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}