import React from "react";
import "./about.scss";
import Resume from "../../assets/Ashutosh-Sahu-Resume.pdf";
import downloadImg from "../../assets/download.svg";

import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <div className="about">
                <motion.div
                    className="textContainer"
                    initial={{ opacity: 0, y: 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 14,
                    }}
                >
                    <div className="box"></div>
                    <div className="text">
                        <h1>I'm Ashutosh, a fullstack developer based in India.</h1>
                        <p>
                            I'm Ashutosh, a skilled full-stack web developer from India.
                            Proficient in React.js, Node.js, CSS, and HTML, I excel in
                            crafting seamless user interfaces. My versatility extends to both
                            frontend and backend, and I focus on design operations to
                            streamline development. With a commitment to clean, maintainable
                            code, I bring order to complexity, tackling challenges creatively.

                        </p>
                        <p>
                            Beyond coding, I thrive in collaborative environments, contributing to impactful solutions. Let's build something incredible together!
                        </p>
                        <motion.div
                            className="resumeContainer"
                            whileHover={{ scale: "1.1" }}
                        >
                            <a href={Resume}>
                                Resume
                                <img src={downloadImg} alt="" />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className="listContainer"
                    initial={{ opacity: 0, y: 500 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 14,
                        delay: 0.2,
                    }}
                >
                    <h2>What i like</h2>
                    <h3>Creating Websites</h3>
                    <h3>Problem Solving</h3>
                    <h3>Playing Guitar</h3>
                    <h2>What I'm learning</h2>
                    <h3>Next Js</h3>
                </motion.div>
            </div>
        </>
    );
};

export default About;
