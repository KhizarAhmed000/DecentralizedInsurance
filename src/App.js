
import './App.css';
import AboutUs from './screens/AboutUs/AboutUs.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './screens/Home';
import UserHome from './screens/UserHome';
import Routing from './services/config/router';

function App() {
  return (
    <Routing/>    
  );
}

export default App;
