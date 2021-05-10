import React from 'react'

import Screen from './Screen'

import '../Styles/Calculator.css'
import Buttons from './Buttons';

function Calculator() {

    return (
      <main className="calc-body">
        <Screen />
        <Buttons />
      </main>
    )
}

export default Calculator;
