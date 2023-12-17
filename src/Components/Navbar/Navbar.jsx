import React from 'react'
import './Navbar.scss';
import { motion } from 'framer-motion';

import github2 from '../../assets/github2.svg';
import linkedin1 from '../../assets/linkedin1.svg';
import gmail1 from '../../assets/gmail1.svg';
import instagram from '../../assets/instagram.svg';
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Ashutosh Sahu</motion.span>

                <motion.div className="social"
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 , delay:0.2 }}
                    
                >
                    <motion.a href="https://github.com/nemesis12-1" target='blank' whileHover={{y:-5}}>
                        <img src={github2} alt="" />
                    </motion.a>
                    <motion.a href="#" whileHover={{y:-5}}>
                        <img src={instagram} alt="" whileHover={{y:-5}} />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/ashutosh-sahu-bvp/" target='blank' whileHover={{y:-5}}>
                        <img src={linkedin1} alt="" />
                    </motion.a>
                    <motion.a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=ashusahu145@gmail.com&tf=1" target='blank' whileHover={{y:-5}}>
                        <img src={gmail1} alt="" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar