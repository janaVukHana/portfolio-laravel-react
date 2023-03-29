import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function ProjectItem({deleteProduct, title, url, id, created_at}) {

    const {setNotification} = useStateContext()

    const onDelete = (e) => {
        e.preventDefault();

        if(!window.confirm('Are you shore you want to delete this project?')) {
            return 
        }

        axiosClient.delete('/projects/'+id)
            .then(() => {
                // todo: show notification
                deleteProduct()
                setNotification('Product is deleted')
            })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{url}</td>
            <td>image</td>
            <td>{created_at}</td>
            <td>
                <Link className="btn-edit" to={'/projects/'+id}>Edit</Link>
                &nbsp;
                &nbsp;
                <button className="btn-delete" onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )
}