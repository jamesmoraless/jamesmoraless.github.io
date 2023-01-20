import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Music from './components/music/Music';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';


function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Music />
        <Contact />
      </main>
    </>
  );
}

export default App;
