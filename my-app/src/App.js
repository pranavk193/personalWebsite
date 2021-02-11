import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import Hobbies from './Hobbies';
import BootstrapSlider from './BootstrapSlider';
import Home from './Home';
import ImageSlider from './ImageSlider';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-cool-text/react-cool-text/output/theme.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/hobbies">Hobbies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/hobbies">
            <h2>Hobbies</h2>
            <BootstrapSlider />
          </Route>
          <Route path="/">
            <Home />
            <ImageSlider />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
