import './App.css';

import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Main from "./Main.jsx";
import Projects from "./Projects.jsx"
import Navbar from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
        );
}

export default App;
