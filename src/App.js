import React from 'react';

import Provider from './context/Provider';
import Calculator from '../src/Components/Calculator'

import "../src/App.css"

function App() {
  return (
    <Provider>
      <div className="app">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
