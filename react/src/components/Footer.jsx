export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <>
        <div className="light-section" style={{padding: '0px', height: '10px', flex: '0 1 auto'}}></div>
        <footer className="dark-section" style={{flex: '0 1 auto'}}>
                <div className="inner-container">
                    <ul>
                        {/* <!-- <li>
                            <a href="https://www.instagram.com/ilija009" target="_blank" rel="noopener"
                                aria-label="instagram icon">
                                <i className="fab fa-instagram fa-2x" aria-hidden="true" title="icon instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ilija.radovanovic1" target="_blank" rel="noopener"
                                aria-label="facebook icon">
                                <i className="fab fa-facebook-square fa-2x" aria-hidden="true" title="icon facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/ilija0009" target="_blank" rel="noopener"
                                aria-label="twitter icon">
                                <i className="fab fa-twitter-square fa-2x" aria-hidden="true" title="icon twitter"></i>
                            </a>
                        </li> --> */}
                        <li>
                            <a href="https://github.com/janaVukHana" target="_blank" rel="noopener"
                                aria-label="github icon">
                                <i className="fab fa-github fa-2x" aria-hidden="true" title="icon github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ilija-radovanovic-84651a82/" target="_blank"
                                rel="noopener" aria-label="linkedIn icon">
                                <i className="fab fa-linkedin fa-2x" aria-hidden="true" title="icon linkedIn"></i>
                            </a>
                        </li>
                    </ul>
                    <p>&copy; <span className="copyright-year">{year}</span> Ilija Radovanović</p>
                    <p>Made with &hearts; & &#9749; in Novi Sad, Budva and Belgrade.</p>
                </div>
            </footer>
        </>
    )
}