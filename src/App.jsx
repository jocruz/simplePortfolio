import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import SkillsCard from './components/SkillsCard'
import About from './components/About'
import Projects from './components/Projects'
import Consultation from './components/Consultation'
import Test from './components/Test'

const App = () => {
  return (
     <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <About/>
     <Consultation/>
     <Projects/>
     </>
  )
}

export default App