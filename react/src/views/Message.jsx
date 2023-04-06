import axiosClient from "../axios-client"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Message() {

    const navigate = useNavigate()

    const [message, setMessage] = useState({})
    const [loading, setLoading] = useState(true)
    
    // get id from params
    const {id} = useParams()

    useEffect(() => {
        axiosClient.get('/contact-us/'+id)
            .then(({data}) => {
                setLoading(false)
                setMessage(data.data)
            })
    }, [])

    return (
        <main className="dark-section">
            <div className="inner-container">
                <h1>Single message</h1>
                {loading && <p>Loading...</p>}
                {!loading && <div className="card message">
                    <p><span>Message from:</span> {message.fName} {message.lName}</p>
                    <p><span>Email:</span> {message.email}</p>
                    <p><span>Message:</span> {message.message} </p>
                    <button className='btn-dashboard' onClick={() => navigate(-1)}>Go Back</button>
                </div>}
            </div>
        </main>
    )
}