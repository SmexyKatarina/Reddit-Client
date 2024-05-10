/*import logo from './logo.svg';*/
import './App.css';
import Header from './components/header.js';
import Randomizer from './components/randomizer.js';
import React from 'react';



function App() {
  return (
    <div className="App">
      <Header />

      <Randomizer />
    </div>
  );
}

export default App;
