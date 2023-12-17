import React from "react";
import "./Hero.scss";
import myImg from "../../assets/my_pic.png";
import scrollImg from "../../assets/scroll.svg";


import { motion } from "framer-motion";

const textVariants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};



const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.h2 variants={textVariants}>Ashutosh Sahu</motion.h2>
            <motion.h1 variants={textVariants}>
              A Full stack Web Developer
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants} whileHover={{background:'white' , color :'black'}}>
                <a href="#Projects">See the Latest Work</a>
              </motion.button>
              <motion.button variants={textVariants} whileHover={{background:'white' , color :'black'}} >
                <a href="#Contact">Contact Me</a>
              </motion.button>
            </motion.div>
            <motion.img variants={textVariants} src={scrollImg} animate="scrollButton" alt="" />
          </motion.div>



          <motion.div className="imageContainer"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              delay: 0.2
            }}>
            <img src={myImg} alt="" />
            {/* <img src={openpeeps} alt="" /> */}
           
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
