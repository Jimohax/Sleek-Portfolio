import './App.css'
import Experiences from './Components/Experiences/Experiences.jsx';
import Intro from './Components/Intro/Intro';

import Navbar from "./Components/Navbar/Navbar";
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Services/>
      <Experiences />
      <Works/>
            
    </div>
  );
}

export default App;
