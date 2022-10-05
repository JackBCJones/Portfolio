import React, { useState, useEffect } from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import {AppWrap, MotionWrap} from '../../wrapper';

import { urlFor, client } from '../../client';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const query = '*[_type == "abouts"]'; 

   client.fetch(query)
   .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <h2 id='about' className='head-text'><span>About</span> me:</h2>

        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div
            whileInView={{x: [-100, 0], opacity: [0, 1]}}
            transition={{duration: 1, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
            >
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
            
            </motion.div>
          ))}
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about', 
   'app__whitebg'
   );