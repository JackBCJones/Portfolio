import React from 'react'


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact', 'resume'].map((item, index) => (
              <a
              href={`#${item}`}
              key={item + index}
              className="app__navigation-dot"
              style={active === item ? {backgroundColor: 'hsl(205, 72%, 37%)'} : { }}
              > </a>
        ))}
    </div>
  )
}

export default NavigationDots