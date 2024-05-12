/*import logo from './logo.svg';*/
import { Provider } from 'react-redux';
import './App.css';
import React from 'react';
import store from './store/store.js';

import Header from './components/header.js';
import Randomizer from './components/randomizer.js';
import PostContainer from './components/PostContainer.js';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Randomizer />
        <div className="content-container">
          <PostContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
