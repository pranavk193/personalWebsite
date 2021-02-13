import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import Hobbies from './Hobbies';
import BootstrapSlider from './BootstrapSlider';
import Home from './Home';
import React from 'react';
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

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      animate: true,
    }
  }

  componentDidMount() {
      this.setState({
        animate: true,
      })
  }
  render() {
  return (
    <div className={
      this.state.animate ? "fade-in-hello hello span" : "hello span"
    }>
      <Router>
      <div className="App-header">
        <nav>
          <ul id="ul_top_hypers">
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
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App">
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
}

export default App;
