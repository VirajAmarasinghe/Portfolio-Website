
import styles from './App.module.css'
import { About } from './componets/About/About';
import { Contact } from './componets/Contact/Contact';
import { Experience } from './componets/Experience/Experience';
import { Hero } from "./componets/Hero/hero";
import { Navbar } from "./componets/Navbar/Navbar";
import { Projects } from './componets/Projects/Projects';


function App() {
 return (
    <div className={styles.App}> 
        <Navbar /> 
        <Hero />
        <About /> 
        <Experience />
        <Projects /> 
        <Contact />

          
          
        
    </div>
 );

}

export default App
