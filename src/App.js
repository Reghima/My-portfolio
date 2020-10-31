import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
      </Router>
    </div>
  );
}

export default App;
