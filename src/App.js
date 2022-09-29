import './App.css';
import Welcome from './components/welcome/Welcome';
import Events from './components/events/Events';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Events />
    </div>
  );
}

export default App;
