import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function ProjectForm() {

    const {setNotification} = useStateContext()

    const navigate = useNavigate();

    const {id} = useParams();
    
    const [errors, setErrors] = useState(null);
    const [project, setProject] = useState({
        'id': null,
        'title': '',
        'url': '',
        // 'image': null
    })
    const fileRef = useRef()
    const [fileName, setFileName] = useState()
    
    if(id) {
        useEffect(() => {
            // set loading
            axiosClient.get('/projects/'+id)
                .then(({data}) => {
                    // set loading
                    setProject({
                        'id': data.data.id,
                        'title': data.data.title,
                        'url': data.data.url
                    })
                })
        }, [])
    }
   
    const onSubmit = (e) => {
        e.preventDefault()

        setErrors(null)

        // update
        if(project.id) {
            // TODO: new FormData procedure
            axiosClient.put('/projects/'+project.id, project)
                .then(() => {
                    console.log('user is updated');
                    setNotification('Project is updated')
                    navigate('/dashboard')
                })
                .catch((err) => {
                    const response = err.response

                     if(response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        // create 
        } else {
            const formData = new FormData();
            formData.append('title', project.title);
            formData.append('url', project.url);
            formData.append('image', project.image);
            axiosClient.post('/projects', formData)
                .then(({data}) => {
                    setNotification('Project is stored')
                    navigate('/dashboard')
                })
                .catch((err) => {
                    const response = err.response
                    
                     if(response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        }

    }

    return (
        <main className="dark-section" style={{flex: '1 1 auto'}}>
            <div className="inner-container">

                {id && <h1>Edit project</h1>}
                {!id && <h1>Add new project</h1>}

                {errors && Object.values(errors).map(err => {
                    return <div className='error'>{err[0]}</div>
                })}
                
                <form onSubmit={onSubmit}>
                    <label htmlFor="title"></label>
                    <input 
                        value={project.title}
                        onChange={(e) => setProject({...project, title: e.target.value})}
                        type="text" 
                        id="title" 
                        placeholder="Your project title" 
                        autoComplete="off"
                    />

                    <label htmlFor="url"></label>
                    <input 
                        value={project.url} 
                        onChange={(e) => setProject({...project, url: e.target.value})}
                        type="text" 
                        id="url" 
                        placeholder="Your project url" 
                        autoComplete="off"
                    />

                    <div className="file-input">
                        <label htmlFor="image">
                            Choose image
                            <input
                                ref={ fileRef }
                                onChange={e => {
                                    setFileName(fileRef.current.files[0].name)
                                    setProject({...project, image: fileRef.current.files[0]})
                                }}
                                type="file"
                                id="image"
                            />
                            <span id="imageName"> {fileName}</span>
                        </label>
                    </div>
                    
                    <button className={`btn-block ${id ? 'btn-edit':'btn-add'}`} type="submit">
                        {id && 'Edit'}
                        {!id && 'Add New'}
                    </button>
                </form>

            </div>
        </main>
    )
}