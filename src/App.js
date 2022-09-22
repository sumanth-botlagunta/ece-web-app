import './App.css';
import Navbar from './components/navbar/Header';
import Carousal from './components/carousal/Carousal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousal />
    </div>
  );
}

export default App;
