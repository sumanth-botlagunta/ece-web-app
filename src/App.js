import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hearld from './pages/hearald/Hearald';
import Events from './pages/events/Events';
import Gallery from './pages/Gallery';
import Faculty from './pages/Faculty';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hearld" element={<Hearld/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
      </Routes>
    </div>
  );
}

export default App;
