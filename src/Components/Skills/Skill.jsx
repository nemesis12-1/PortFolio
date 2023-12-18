import React from 'react'
import './skill.scss';
import { motion, useInView } from 'framer-motion';

const frontEnd = [
  "HTML",
  "CSS",
  "Tailwind",
  "Sass",
  "Javascript",
  "React Js",
]

const backEnd = [
  "Node Js",
  "Express Js",
]

const dataBase = [
  "MongoDB",
  "Firebase",
  "MySQL",
]

const others = [
  "Git",
  "Github",
  "C++",
  "Data Structure",
]

const textVariants = {
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
    }
  }
}

const Skill = () => {
  return (
    <>
      <div className="skill">

        <motion.div className="titleContainer"
          //  variants={textVariants} initial='initial' whileInView='animate'
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 14,
            // delay: 0.2,
          }}

        >
          What I Know
        </motion.div>

        <motion.div className="boxContainer"
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 14,
            delay: 0.2,
          }}>

          <motion.div className="box"
          >
            <div className="boxTitle">
              Front End
            </div>
            <div className="boxContent">
              {frontEnd.map((item, index) => (
                <motion.div key={index}>
                  <motion.p
                    whileHover={{ background: "orange ", color: "black" }}>{item}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="box" >
            <div className="boxTitle">
              Back End
            </div>
            <div className="boxContent">
              {backEnd.map((item, index) => (
                <div key={index}>
                  <motion.p
                    whileHover={{ background: "orange ", color: "black" }}>{item}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="box" >
            <div className="boxTitle">
              DataBase
            </div>
            <div className="boxContent">
              {dataBase.map((item, index) => (
                <div key={index}>
                  <motion.p
                    whileHover={{ background: "orange ", color: "black" }}>{item}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="box">
            <div className="boxTitle">
              Other
            </div>
            <div className="boxContent">
              {others.map((item, index) => (
                <div key={index}>
                  <motion.p
                    whileHover={{ background: "orange ", color: "black" }}>{item}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  )
}

export default Skill