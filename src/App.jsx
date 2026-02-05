import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CVLayout from './components/CvLayout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CVLayout />
      </div>
    </Router>
  );
}

export default App;