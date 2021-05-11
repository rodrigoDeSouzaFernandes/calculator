import React from 'react';

import Provider from './context/Provider';
import Calculator from '../src/Components/Calculator'

import "../src/App.css"
import Historic from './Components/Historic';

function App() {
  return (
    <Provider>
      <div className="app">
        <Calculator />
        <Historic />
      </div>
    </Provider>
  );
}

export default App;
