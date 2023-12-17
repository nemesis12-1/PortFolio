import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 14,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_x8zbwgd",
                "template_v7mao4q",
                formRef.current,
                "Vic70vtFOolTdeDtv"
            )
            .then(
                (result) => {
                    setSuccess(true)
                },
                (error) => {
                    setError(true);
                }
            );

        e.target.reset();
    };

    return (
        <>
            <motion.div
                className="contact"
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <motion.div className="textContainer">
                    <motion.h1 variants={variants}>Let’s work together</motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2>Mail</h2>
                        <span>ashusahu145@gmail.com</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2>Phone</h2>
                        <span>+91 9981237855</span>
                    </motion.div>
                </motion.div>
                <div className="formContainer">

                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, y: 500 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 70,
                            damping: 14,
                        }}
                    >
                        <input type="text" required placeholder="Name" name="from_name" />
                        <input type="email" required placeholder="Email" name="email" />
                        <textarea rows={8} placeholder="Message" name="message" required />
                        <button>Submit</button>
                    </motion.form>
                    <div style={{ color: 'red' }}>
                        {error && "Error"}
                    </div>
                    <div style={{ color: 'green' }}>
                        {success && "Success"}
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Contact;
