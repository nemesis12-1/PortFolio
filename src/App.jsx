import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/HeroSection/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact'
import Skill from './Components/Skills/Skill'

const App = () => {
  return (
    <>
      <div>
        <section id='Homepage'>
          <Navbar />
          <Hero />
        </section>
        <section id='About'><About /></section>
        <section id='Skills'><Skill /></section>
        <Project />
        <section id='Contact'><Contact /></section>
      </div>
    </>
  )
}

export default App
