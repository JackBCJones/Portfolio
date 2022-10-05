import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } 
from 'react-icons/fa';


export const links = [
    
    {
        id: 1, 
        url: '#about',
        text: 'About',
    },
    {
        id: 2, 
        url: '#work',
        text: 'Work',
    },
    {
        id: 3, 
        url: '#skills',
        text: 'Skills',
    },
    {
        id: 4, 
        url: '#contact',
        text: 'Get in Touch',
    },
    {
        id: 5, 
        url: '#resume',
        text: 'Resume',
    },

];

export const socials = [
    {
        id: 1, 
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 2, 
        url: 'https://www.facebook.com',
        icon:<FaFacebook />,
    },
    {
        id: 3, 
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />,
    },
    {
        id: 4, 
        url: 'https://www.github.com',
        icon: <FaGithub />,
    },
];