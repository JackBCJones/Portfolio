import React from 'react';
import { motion } from 'framer-motion';

import {AppWrap} from '../../wrapper'
import { images } from '../../constants';
import './Header.scss';

const scaleVarients = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition = {{duration: 1}}
      className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hey, I'm</p>
              <h1 className='head-text'> Jack Calburn-Jones</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>I'm a <span>Cape Town</span> based Web developer </p>
          <p className='p-text'>specializing in frontend applications that look exceptional and are easily accessible</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition = {{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
        >
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
        >
          {[images.react, images.javascript, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='circle'/>
            </div>
          ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
