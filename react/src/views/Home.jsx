import { useEffect, useState } from 'react';
import {AnimationOnScroll} from 'react-animation-on-scroll'
import axiosClient from '../axios-client';
import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname);
import ProfileCard from '../components/ProfileCard';

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
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <header className="light-section">
                <div className="inner-container">
                    <div className="intro">
                        {/* <h1>React Laravel Developer</h1> */}
                        <div className="intro-card">
                            <div>
                                <h1><span>Hello,</span><br />I'm Ilija</h1>
                                <h2>A Web Developer focused on React and Laravel</h2>
                            </div>
                            <ProfileCard />
                        </div>
                    </div>
                </div>
            </header>
            
            <main>

                {/* ABOUT ME SECTION */}
                <section id="about-me" className="dark-section">
                    <div className="inner-container">
                        <h2>About me</h2>
                        <p>
                            I am a Full Stack Developer from Novi Sad, Serbia. Quiet and
                            focused person who can work swiftly and effectively either alone or as part of a
                            team.
                        </p>
                        <p>
                            Husband, father of three small kids, basketball player, free climber and camping lover.
                        </p>
                    </div>
                </section>

                {/* WORK SECTION */} 
                <section id="work" className="light-section">
                    <div className="inner-container">
                        <h2>These are some of my projects</h2>
                        {loading && <p>Loading...</p>}
                        {projects && <div className='row'>
                            {projects.map((project, index) => {
                                return (
                                    <div key={index} className='col animate'>
                                        <AnimationOnScroll animateOnce={true} animateIn='animate__bounceIn'>
                                            <a href={project.url} target="_blank" rel="noopener">
                                                <figure>
                                                    <img src={"https://api.ilijaradovanovic.com/images/"+project.image} alt="project image" />
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

                {/* SKILLS SECTION */}
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
                                <i className="fab fa-react fa-5x"></i>
                                <p>React</p>
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
                                {/* <li>React</li>
                                <li>Wordpress</li> */}
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