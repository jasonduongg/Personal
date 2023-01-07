import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Main from "./Main.jsx";
import Project from "./Projects.jsx"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/'  element={ <Main/>} />
          <Route path='/projects' element={<Project/>} />
        </Routes>
      </Router>
  );
}

export default App;
