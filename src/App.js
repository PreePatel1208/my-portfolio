
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Skills from './components/Skills';
function App() {
  return (
    <>

      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Skills />
        <Projects/>
        <Contact />
      </main>
    </>
  );
}

export default App;
