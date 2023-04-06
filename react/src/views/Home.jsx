import { useEffect, useState } from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll'
import axiosClient from '../axios-client';

export default function Home() {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = () => {
        setLoading(true)
        axiosClient.get('/projects')
            .then(({data}) => {
                setLoading(false)
                setProjects(data.data)
                console.log('DATA FROM USEEFFECT', data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <header className="light-section">
                <div className="inner-container">
                    <h1 id="intro">I'm Ilija<br /><span>a web developer</span></h1>
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

                {/* WORK SECTION TEST */} 
                <section id="work" className="light-section">
                    <div className="inner-container">
                        <h2>These are some of my projects</h2>
                        {projects && <div className='row'>
                            {projects.map(project => {
                                return (
                                    <div className='col animate'>
                                        <AnimationOnScroll animateOnce={true} animateIn='animate__bounceIn'>
                                            <a href={project.url} target="_blank" rel="noopener">
                                                <figure>
                                                    <img src={"http://localhost:8000/images/"+project.image} alt="project image" />
                                                    <figcaption><span>&lt;</span>{[project.title]}<span>/&gt;</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </AnimationOnScroll>
                                    </div> 
                                )
                            })}
                        </div> 
                        }
                    </div>
                </section>
                {/* END */}

                {/* <!-- WORK SECTION --> */}
                <section id="work" className="light-section">
                    <div className="inner-container">
                        <h2>These are some of my projects</h2>
                        <div className="row">
                            <div className='col animate'>
                                <AnimationOnScroll animateOnce={true} animateIn='animate__bounceIn'>
                                    <a href="https://janavukhana.github.io/crudApp/" target="_blank" rel="noopener">
                                        <figure>
                                            <img src="../src/assets/img/crud.jpg" alt="message" />
                                            <figcaption><span>&lt;</span>CRUD app<span>/&gt;</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </AnimationOnScroll>
                            </div>
                            <div className='col animate'>
                            {/* TODO: ADD DELAY DINAMICALY IF YOU WANT */}
                                <AnimationOnScroll animateOnce={true} animateIn='animate__bounceIn' delay={200}>
                                    <a href="https://janavukhana.github.io/clone-starbucks/" target="_blank" rel="noopener">
                                        <figure>
                                            <img src="../src/assets/img/quokka-1.webp" alt="quokka" />
                                            <figcaption><span>&lt;</span>Starbucks clone<span>/&gt;</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </AnimationOnScroll>
                            </div>
                            <div className='col animate'>
                                <AnimationOnScroll animateOnce={true} animateIn='animate__bounceIn' delay={400}>
                                    <a href="https://janavukhana.github.io/the_game/index.html" target="_blank"
                                        rel="noopener">
                                        <figure>
                                            <img src="../src/assets/img/deadpool-1.webp" alt="game" />
                                            <figcaption><span>&lt;</span>The Game<span>/&gt;</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </AnimationOnScroll>
                            </div>
                            {/* Delete this */}
                            <div className='col animate'>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
                                    <a href="https://janavukhana.github.io/the_game/index.html" target="_blank"
                                        rel="noopener">
                                        <figure>
                                            <img src="../src/assets/img/deadpool-1.webp" alt="game" />
                                            <figcaption><span>&lt;</span>The Test<span>/&gt;</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </AnimationOnScroll>
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
            </main>
        </>
    )
}