import './App.css'
import Contact from './Components/Contact/Contact';
import Experiences from './Components/Experiences/Experiences.jsx';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';

import Navbar from "./Components/Navbar/Navbar";
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Services/>
      <Experiences />
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
            
    </div>
  );
}

export default App;
