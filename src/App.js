import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
// import Menu from './Menu';
import About from './About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route exact path="/menu" component={Menu} /> */}
        <Route path="/about" element={<About/>} />
        </Routes>
    </Router>

  );
}

export default App;
