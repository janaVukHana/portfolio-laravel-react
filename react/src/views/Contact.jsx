export default function Users() {
    return (
        <section id="contact" className="light-section">
        {/* <!-- CONTACT SECTION --> */}
        <div className="inner-container">
            <h2>Let's work together...</h2>
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
            <form action="/" method="post">
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Your email" autoComplete="off"
                    required />
                <label htmlFor="fName"></label>
                <input type="text" id="fName" name="fName" placeholder="First name" required
                    autoComplete="off" />
                <label htmlFor="lName"></label>
                <input type="text" id="lName" name="lName" placeholder="Last name" required
                    autoComplete="off" />
                <label htmlFor="message"></label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"
                    required></textarea>
                <button type="submit">SEND MESSAGE</button>
            </form>
            <div className="form-submit-message">
                <p>Your form has been submited!</p>
            </div>
        </div>
    </section>
    )
}