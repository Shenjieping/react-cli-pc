import React from 'react';
import {NavLink } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavLink to="/page1">page1</NavLink >
      <NavLink to="/page2">page2</NavLink >
    </div>
  );
}

export default App;
