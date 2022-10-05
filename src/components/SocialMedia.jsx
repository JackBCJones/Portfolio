import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
           <a href="https://github.com/JackBCJones" target="__blank"><FaGithub /></a> 
        </div>
        <div>
        <a href="https://www.linkedin.com/in/jack-calburn-jones-254ba4244/" target="__blank"><FaLinkedin /></a>
        </div>
        <div>
        <a href="https://www.instagram.com/jackbcjones/?hl=en" target="__blank"><BsInstagram /></a>
        </div>
    </div>
  )
}
export default SocialMedia