import logo from './logo.svg';
import './App.css';
import FC from './FC';
import Login from './Login';
import Todos from './Todos';
import Navbar from './Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Localstorage from './Localstorage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/services">
            <Services />
          </Route>
          <Route path='/localstorage' component={Localstorage} exact/>
          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
