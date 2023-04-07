import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function ProjectItem({deleteProduct, title, img, id}) {

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
            <td>{title}</td>
            <td><img className="thumbnail-img" src={"http://localhost:8000/images/"+img} /></td>
            <td>
                <Link className="btn-edit" to={'/projects/'+id}>Edit</Link>
                &nbsp;
                &nbsp;
                <button className="btn-delete" onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )
}