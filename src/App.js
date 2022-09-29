import './App.css';
import Welcome from './components/welcome/Welcome';
import Events from './components/events/Events';
import Hearld from "./components/hearld/Hearld";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Events />
      <Hearld />
    </div>
  );
}

export default App;
