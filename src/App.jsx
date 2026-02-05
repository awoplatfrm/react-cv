import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import CVLayout from './components/CvLayout';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <CVLayout />
      </div>
    </HashRouter>
  );
}

export default App;