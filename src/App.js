import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
function App() {
  return (
      <div>
      <Router>
      <Header/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
