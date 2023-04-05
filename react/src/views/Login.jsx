import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [errors, setErrors] = useState(null)

    const {token, setUser, setToken} = useStateContext()

    if(token) {
       return <Navigate to="/dashboard" />
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            'email': emailRef.current.value,
            'password': passwordRef.current.value
        }
        setErrors(null)
        
        axiosClient.post('/login', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response
                if(response &&  response.status === 422) {
                    if(response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message]
                        })
                    }
                }
            })
    }

    return (
        <main  className="light-section" style={{flex: '1 1 auto'}}>
        {/* <!-- LOGIN SECTION --> */}
            <div className="inner-container">
                <h1>Login</h1>
                
                <form onSubmit={onSubmit}>
                    <label htmlFor="email"></label>
                    <input ref={emailRef} type="email" id="email" placeholder="Your email" autoComplete="on"
                         />

                    <label htmlFor="password"></label>
                    <input ref={passwordRef} type="password" id="password" placeholder="Your password" autoComplete="on"
                         />
                    
                    <button className="btn-block" type="submit">LOGIN</button>
                </form>

                {errors && <div>
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>}
                
            </div>
        </main>
    )
}