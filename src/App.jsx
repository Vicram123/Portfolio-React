import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/Nav'
import About from './components/about/about'
import Experience from './components/experience/Experience'
import Services from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
