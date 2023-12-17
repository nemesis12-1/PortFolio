import React, { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';



const variants = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }

    }
}



const Services = () => {

    const ref = useRef();
    const inView = useInView(ref, { marginTop: '-100px' });
    return (
        <>
            <motion.div ref={ref} className="services" variants={variants} initial='initial' whileInView='animate'
                animate={inView && 'animate'}
            >
                <motion.div className="textContainer" variants={variants} >
                    <p>I focus on helping Brand grow <br /> and move forward</p>
                    <hr />
                </motion.div>
                <motion.div className="titleContainer" variants={variants} >
                    <div className="title">
                        <img src={img} alt="" />
                        <h1> <b> Unique</b> Ideas</h1>
                    </div>
                    <div className="title">
                        <h1> <b> For Your</b> Business</h1>
                        <button>What We Do?</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants} >
                    <motion.div className="box" whileHover={{ background: "lightGray", color: 'black' }}>
                        <h2>Branding</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis dolorem a reiciendis exercitationem error itaque, quam quos soluta ad placeat beatae quaerat quibusdam voluptatibus.
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightGray", color: 'black' }}>
                        <h2>Branding</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis dolorem a reiciendis exercitationem error itaque, quam quos soluta ad placeat beatae quaerat quibusdam voluptatibus.
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightGray", color: 'black' }}>
                        <h2>Branding</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis dolorem a reiciendis exercitationem error itaque, quam quos soluta ad placeat beatae quaerat quibusdam voluptatibus.
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightGray", color: 'black' }}>
                        <h2>Branding</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis dolorem a reiciendis exercitationem error itaque, quam quos soluta ad placeat beatae quaerat quibusdam voluptatibus.
                        </p>
                        <button>Go</button>
                    </motion.div>

                </motion.div>
            </motion.div>
        </>
    )
}

export default Services