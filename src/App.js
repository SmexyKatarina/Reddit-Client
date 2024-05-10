/*import logo from './logo.svg';*/
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header.js';
import Randomizer from './components/randomizer.js';
import React from 'react';
import store from './store/store.js';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Randomizer />
      </div>
    </Provider>
  );
}

export default App;
