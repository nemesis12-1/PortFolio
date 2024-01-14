import React, { useRef } from 'react';
import './project.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import linkImg from '../../assets/link.svg';
import tripadvisor from '../../assets/tripadvisor-Image.webp';
import manageWise from '../../assets/managewise-Image.png';
import noteme from '../../assets/noteme-Image.png'
import mernauth from '../../assets/mernauth-Image.png'
import converso from '../../assets/converso-Image.png'
import weblog from '../../assets/weblog-Image.png'

const items = [
    {
        id: 1,
        title: 'Mern Auth',
        img: mernauth,
        description: `•MERN stack web app with React for the front end, Node.js
        and Express for the back end, and MongoDB for the
        database.Features user authentication with JWT for secure
        sign-up, login, logout, and access to protected routes. Ideal
        template for kickstarting full-stack projects.`,
        techStack: ['Tech Stack : React, Redux,Tailwind, Node, Express, MongoDB'],
        code: 'https://github.com/nemesis12-1/mern-auth',
        demoLink: 'https://mern-auth-sryt.onrender.com/',
        disclaimer: 'Note: The app is hosted on Free Server, so it may take a few seconds to load initially.',
        demoAccount: 'Username : test, Email : test@gmail.com, Password : 121212'
    },
    {
        id: 2,
        title: 'WeBlog',
        img: weblog,
        description: `Full-stack blog app with React for the front end, Node.js and
        Express for the backend, and MongoDB for the database.
        Enables users to create, update, and delete blogs. User-specific permissions for editing and deleting their own
        blogs. Enhanced with third-party packages for efficiency.`,
        techStack: ['Tech Stack : React, Context API, Tailwind, Node, Express, MongoDB'],
        code: 'https://github.com/nemesis12-1/mern-blog-app-frontend',
        // demoLink: 'https://www.google.com/'
    },
    {
        id: 3,
        title: 'Converso',
        img: converso ,description: 'A full stack Chat web App made using React, Redux, Node, Express, MongoDB, Socket.io',
        techStack: ['Tech Stack : HTML , React, Redux, Tailwind CSS , Node, Express, MongoDB'],
        // demoLink: 'https://www.google.com/'
    },
    {
        id: 4,
        title: 'Note Me',
        img: noteme ,description: 'A Note Taking App made Using React , it uses localStorage for storing data. You can create , update , delete and search for a particular note and can change then background color of the note.',
        techStack: ['Tech Stack : React, Css '],
        code: 'https://github.com/nemesis12-1/NoteMe',
        demoLink: 'https://nemesis12-1.github.io/NoteMe/',
    },
    {
        id: 5,
        title: 'ManageWise Clone',
        img: manageWise ,description: 'A clone of ManageWise Website made using React and CSS used framer motion for animation',
        code: 'https://github.com/nemesis12-1/hireQuotient-Assignment',
        demoLink: 'https://nemesis12-1.github.io/hireQuotient-Assignment/',
        techStack: ['Tech Stack : React, Css, Framer Motion'],
    },
    {
        id: 6,
        title: 'Tripadvisor',
        img: tripadvisor,
         description: 'A UI Home Page of Tripadvisor Website made using React and CSS (Not Responsive).',
        code: 'https://github.com/nemesis12-1/tripadvisor',
        demoLink: 'https://tripadvisor-teal.vercel.app/',
        techStack: ['Tech Stack : React, Css'],
        disclaimer: 'Note: The app is hosted on Free Server, so it may take a few seconds to load initially.',
    },

]


const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["end end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 300]);

    return (
        <section id='Projects'>
            <div className="container">
                <div className="wrapper">
                    <motion.div className="imageContainer"
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 70,
                            damping: 14,
                        }} >
                        <img src={item.img} alt="" />
                    </motion.div>
                    <motion.div className="textConatiner"
                        initial={{ opacity: 0, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 70,
                            damping: 14,
                            delay: 0.1
                        }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="techStackContainer">
                            <p>{item.techStack}</p>
                        </div>

                        <div className="buttonContainer">
                            {item.demoLink ?
                                <button>
                                    <a href={item.demoLink} target='blank'>Live Demo
                                        <img src={linkImg} alt="" />
                                    </a>
                                </button>
                                :
                                <p>No Demo</p>
                            }

                            {item.code ?
                                <button>
                                    <a href={item.code} target='blank'>Code
                                        <img src={linkImg} alt="" />
                                    </a>
                                </button>
                                :
                                <p style={{ background: 'green' }}>Currently On Development</p>
                            }
                        </div>

                        <h5>{item.demoAccount}</h5>

                        <div className="disclaimer">
                            {item.disclaimer && <p>
                                {item.disclaimer}
                            </p>}
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Project = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });;




    return (
        <>
            <div className="project" >

                <div className="progress">
                    <h1>Featured Works</h1>
                    <motion.div style={{ scaleX }} className="progressBar"></motion.div>
                </div>

                {items.map((item) =>
                    (<Single item={item} key={item.id} />)
                )}
            </div>
        </>
    )
}

export default Project