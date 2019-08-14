import React from 'react';
import {Link} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </div>
  );
}

export default App;
