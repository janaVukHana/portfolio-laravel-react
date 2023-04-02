import { useEffect, useState } from "react"
import axiosClient from "../axios-client";
import { Link } from 'react-router-dom';
import ProjectItem from "./ProjectItem";

export default function Project() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = () => {
        setLoading(true)
        console.log('into getProjcts from Project jsx');
        axiosClient.get('/projects')
            .then(({data}) => {
                console.log('from then');
                console.log(data.data)
                setLoading(false)
                setProjects(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <div className="row">
                <h1>My Projects</h1>
                <Link to="/projects/new" className="btn-add">Add New</Link>
            </div>
            <div className="card animated fadeInDown">
                {loading && <p>loading ...</p>}

                {!loading && 
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>URL</th>
                                <th>IMAGE</th>
                                <th>CREATED_AT</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects && projects.map(project => (
                                <ProjectItem 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    url={project.url} 
                                    img={project.image}
                                    created_at={project.created_at}
                                    deleteProduct={getProjects}
                                />
                                )) 
                            }
                            {/* Show message if there is 0 projects to show */}
                            {projects.length < 1 && <tr><td>No projects for now!</td></tr>}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}