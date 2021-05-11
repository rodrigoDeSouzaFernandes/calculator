import React, { useContext, useState } from 'react';
import CalcContext from '../context/CalcContext';

import '../Styles/Buttons.css'

function Buttons() {

  const { exp, setExp, renderResult,
    hist, setHist } = useContext(CalcContext)

  const addToExp = (item) => {
    exp.length < 12 
    ? setExp(exp+item)
    : alert("Máximo de caracteres atingido")
  }

  const functionGuide = {
    "=": () => {
      setHist([`${exp} = ${renderResult(exp)}`, ...hist]);
      setExp(`${renderResult(exp)}`);
  },
    C: () => setExp(""),
    "⌫": () => setExp(exp.slice(0, exp.length -1)),
    "^": () => addToExp( "**" ),
    "÷": () => addToExp( "/" ),
    x: () => addToExp( "*" ),
    '-': () => addToExp( "-" ),
    '+':() => addToExp( "+" ),
    '.': () => addToExp( "." ),
    1:() => addToExp( "1" ),
    2:() => addToExp( "2" ),
    3: () => addToExp( "3" ),
    4:() => addToExp( "4" ),
    5:() => addToExp( "5" ),
    6:() => addToExp( "6" ),
    7:() => addToExp( "7" ),
    8:() => addToExp( "8" ),
    9:() => addToExp( "9" ),
    0:() => addToExp( "0" ),
  }

  const buttons = [
    'C','⌫', '^', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=']

  return (
    <div className="button-container">
      
      {
        buttons.map((elem, i) => {
          return (
            <button
            className="btn"
            name={elem}
            key={i}
            onClick = {functionGuide[`${elem}`]}
            >
              {elem}
            </button>
          )
        })
      }
    </div>
  )
}

export default Buttons;