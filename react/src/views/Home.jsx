import { useRef, useEffect, useState } from 'react';

export default function Home() {

    // Note: image in work section is opacity 0 and scale 0
    // probably need to use useEffect
    const [elementVisible, setElementVisible] = useState(false)

    const myRef = useRef(null)

    useEffect(() => {
        console.log('myRef', myRef.current);
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0]
            // TODO: delete logs
            console.log('entry', entry);
            console.log('entry.isIntersecting', entry.isIntersecting);
            console.log('top: ', entry.boundingClientRect.top);
            if(entry.isIntersecting) {
                setElementVisible(true)
            }
        });
        observer.observe(myRef.current);
      }, []);

    return (
        <>
            <header className="light-section">
                <div className="inner-container">
                    <h1>I'm Ilija<br /><span>a web developer</span></h1>
                </div>
            </header>
            
            <main>

                {/* <!-- ABOUT ME SECTION --> */}
                <section id="about-me" className="dark-section">
                    <div className="inner-container">
                        <h2>About me</h2>
                        <p>I am a self-taught Full Stack Developer from Novi Sad, Serbia. Husband, father of three small
                            kids, dog owner - Labrador Retriever are the best, veteran basketball player, former free
                            climber and camping lover.</p>
                    </div>
                </section>

                {/* <!-- WORK SECTION --> */}
                <section id="work" className="light-section">
                    <div className="inner-container">
                        <h2>These are some of my projects</h2>
                        <div className="row">
                            <div className={`col ${elementVisible ? 'animate' : ''}`}>
                                <a href="https://janavukhana.github.io/crudApp/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="../src/assets/img/crud.jpg" alt="message" />
                                        <figcaption ref={myRef}><span>&lt;</span>CRUD app<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className={`col ${elementVisible ? 'animate' : ''}`}>
                                <a href="https://janavukhana.github.io/clone-starbucks/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="../src/assets/img/quokka-1.webp" alt="quokka" />
                                        <figcaption><span>&lt;</span>Starbucks clone<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className={`col ${elementVisible ? 'animate' : ''}`}>
                                <a href="https://janavukhana.github.io/the_game/index.html" target="_blank"
                                    rel="noopener">
                                    <figure>
                                        <img src="../src/assets/img/deadpool-1.webp" alt="game" />
                                        <figcaption><span>&lt;</span>The Game<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                              {/* <div class="col">
                                <a href="https://janavukhana.github.io/zdrav-zivot/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="./img/zdrav-zivot.jpg" alt="house" />
                                        <figcaption><span>&lt;</span>Zdrav život<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div> */}
                            {/* <div class="col">
                                <a href="https://janavukhana.github.io/band/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="./img/chicago_1.jpg" alt="the band" />
                                        <figcaption><span>&lt;</span>The Band<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://cryptic-reef-32605.herokuapp.com/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="/img/weadding_photo.webp" alt="wedding" />
                                        <figcaption><span>&lt;</span>Weddings<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div> */}
                            {/* <div class="col">
                                <a href="https://janavukhana.github.io/dzidzabidzice/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="/img/muffin_4.jpeg" alt="muffins" />
                                        <figcaption><span>&lt;</span>Muffins<span>/&gt;</span></figcaption>
                                    </figure>
                                </a>
                            </div> */}
                            {/* <div class="col">
                                <a href="https://janavukhana.github.io/restaurant-modal/" target="_blank"
                                    rel="noopener">
                                    <figure>
                                        <img src="/img/onepage_restaurant.jpg" alt="restaurant" />
                                        <figcaption><span>&lt;</span>Restaurant<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div> */}
                            {/* <!-- <div class="col">
                                <a href="https://janavukhana.github.io/divcibareApp/" target="_blank">
                                    <figure>
                                        <img src="/img/apartment.jpeg" alt="house" />
                                        <figcaption><span>&lt;</span>Apartment<span>/&gt;</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div> --> */}
                            {/* <div class="col">
                                <a href="https://janavukhana.github.io/sanitetskiTransport/" target="_blank"
                                    rel="noopener">
                                    <figure>
                                        <img src="assets/img/abmulance.jpg" alt="ambulance car" />
                                        <figcaption><span>&lt;</span>Ambulance<span>/&gt;</span></figcaption>
                                    </figure>
                                </a>
                            </div> */}
                            {/* <div class="col">
                                <a href="https://janavukhana.github.io/hamburger-w3/" target="_blank" rel="noopener">
                                    <figure>
                                        <img src="./img/hamburger.jpg" alt="hamburger" />
                                        <figcaption><span>&lt;</span>Catering<span>/&gt;</span></figcaption>
                                    </figure>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* <!-- MY SKILLS SECTION --> */}
                <section id="my-skills" className="dark-section">
                    <div className="inner-container">
                        <h2>My skills</h2>
                        <div className="row">
                            <div className="col">
                                <i className="fab fa-html5 fa-5x"></i>
                                <p>Html5</p>
                            </div>
                            <div className="col">
                                <i className="fab fa-css3 fa-5x"></i>
                                <p>CSS3</p>
                            </div>
                            <div className="col">
                                <i className="fab fa-js-square fa-5x"></i>
                                <p>JS</p>
                            </div>
                            <div className="col">
                                <i className="fab fa-php fa-5x"></i>
                                <p>PHP</p>
                            </div>
                            <div className="col">
                                <i className="fab fa-laravel fa-5x"></i>
                                <p>Laravel</p>
                            </div>
                        </div>
                        <div className="other-skills">
                            <h3>Other skills basic knowledge</h3>
                            <ul>
                                <li>MySQL</li>
                                <li>Bootstrap</li>
                                <li>Node.js</li>
                                <li>React</li>
                                <li>Wordpress</li>
                            </ul>
                        </div>
                        <div className="other-skills">
                            <h3>Experience with tools</h3>
                            <ul>
                                <li>Linux</li>
                                <li>git</li>
                                <li>GitHub</li>
                                <li>gulp</li>
                                <li>webpack</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* <!-- CONTACT SECTION --> */}
                {/* <section id="contact" class="light-section">
                    <div class="inner-container">
                        <h2>Let's work together...</h2>
                        <h3>How do you take your coffee?</h3>
                        <div class="contact-info">
                            <p>
                                <i class="fas fa-map-marker-alt"></i> Novi Sad, Serbia
                            </p>
                            <p>
                                <i class="fas fa-mobile-alt"></i> Phone: <a href="tel:+38162421903">+381 62 421903</a>
                            </p>
                            <p>
                                <i class="fas fa-at"></i>Email: ilija009@gmail.com
                            </p>
                        </div>
                        <h3 class="form-heading">Say Hi!</h3>
                        <form action="/" method="post">
                            <label for="email"></label>
                            <input type="email" id="email" name="email" placeholder="Your email" autocomplete="off"
                                required />
                            <label for="fName"></label>
                            <input type="text" id="fName" name="fName" placeholder="First name" required
                                autocomplete="off" />
                            <label for="lName"></label>
                            <input type="text" id="lName" name="lName" placeholder="Last name" required
                                autocomplete="off" />
                            <label for="message"></label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"
                                required></textarea>
                            <button type="submit">SEND MESSAGE</button>
                        </form>
                        <div class="form-submit-message">
                            <p>Your form has been submited!</p>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    )
}