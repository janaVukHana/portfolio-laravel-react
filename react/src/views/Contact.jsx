import { useRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Contact() {

    const [msg, setMsg] = useState(null)
    const [errors, setErrors] = useState(null)
    const [sending, setSending] = useState(false)
    const {setNotification} = useStateContext()

    const emailRef = useRef()
    const fNameRef = useRef()
    const lNameRef = useRef()
    const messageRef = useRef()

    const handleSubmit = e => {
        e.preventDefault();
        setSending(true)
        setErrors(null)
        
        // TODO: probably don't need msg and setMsg at all...
        setMsg({
            'email': emailRef.current.value,
            'fName': fNameRef.current.value,
            'lName': lNameRef.current.value,
            'message': messageRef.current.value
        })

        const formData = new FormData();
            // formData.append('id', project.id);
            formData.append('email', emailRef.current.value);
            formData.append('fName', fNameRef.current.value);
            formData.append('lName', lNameRef.current.value);
            formData.append('message', messageRef.current.value);
        
        // THIS  ALSO WORK
        axiosClient.post('/contact-us', formData)
            .then(data => {
                setSending(false)
                // TODO: show notification
                setNotification('Your message is send! Whooohooo!')
                e.target.reset()
            })
            .catch((err) => {
                setSending(false)
                const response = err.response

                 if(response && response.status === 422) {
                    setErrors(response.data.errors)
                 }
            })

    }

    return (
        <main id="contact" className="light-section">
        {/* <!-- CONTACT SECTION --> */}
        <div className="inner-container">
            <h1>Let's work together...</h1>
            <h3>How do you take your coffee?</h3>
            <div className="contact-info">
                <p>
                    <i className="fas fa-map-marker-alt"></i> Novi Sad, Serbia
                </p>
                <p>
                    <i className="fas fa-mobile-alt"></i> Phone: <a href="tel:+38162421903">+381 62 421903</a>
                </p>
                <p>
                    <i className="fas fa-at"></i>Email: ilija009@gmail.com
                </p>
            </div>
            <h3 className="form-heading">Say Hi!</h3>

            {errors && Object.values(errors).map(err => {
                    return <div className='error'>{err[0]}</div>
                })}

            <form onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input ref={emailRef} type="email" id="email" placeholder="Your email" autoComplete="on" />
                <label htmlFor="fName"></label>
                <input ref={fNameRef} type="text" id="fName" placeholder="First name" autoComplete="on" />
                <label htmlFor="lName"></label>
                <input ref={lNameRef} type="text" id="lName" placeholder="Last name" autoComplete="on" />
                <label htmlFor="message"></label>
                <textarea ref={messageRef} id="message" cols="30" rows="10" placeholder="Your message"></textarea>
                <button type="submit">SEND MESSAGE</button>
            </form>
            {sending && <p style={{color: 'white', padding: '10px', backgroundColor: 'red', position: 'fixed', bottom: '20px', right: '20px'}}>Sending...</p>}
            
        </div>
    </main>
    )
}