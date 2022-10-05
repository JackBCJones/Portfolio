import React from 'react'
import { SocialMedia } from './components/index'
import { About, Footer, Header, Skills, Work } from './container'
import { Nav } from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
        <Nav />
        <SocialMedia />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
    </div>
  );
}

export default App;