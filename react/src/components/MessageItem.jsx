import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider"

export default function MessageItem({id, fName, lName, created_at, deleteMessage}) {

    const {setNotification} = useStateContext()
    const navigate = useNavigate()

    const onDelete = (e) => {
        e.preventDefault();

        if(!window.confirm('Are you shore you want to delete this message?')) {
            return 
        }

        axiosClient.delete('/contact-us/'+id)
            .then(() => {
                // todo: show notification
                setNotification('Message deleted')
                deleteMessage()
            })
    }

    return (
        <tr>
            <td>{fName} {lName}</td>
            <td>{created_at}</td>
            <td><Link to={'/contact-us/'+id} className="btn-dashboard">Show More</Link></td>
            <td><button className="btn-delete" onClick={onDelete}>Delete</button></td>
        </tr>
    )
}