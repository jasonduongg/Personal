import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Main from "./Main.jsx";
import Project from "./Projects.jsx"

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
        {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch> */}
      </div>
        );
}

export default App;
