import React from 'react';

import '../Styles/Buttons.css'

function Buttons() {

  const buttons = [
    '^', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',',]

  return (
    <div className="button-container">
      <button
            className="btn"
            name={ 'clean' }
            >
              C
      </button>
      <button
            className="btn"
            name={ 'backspace' }
            >
              ⌫
      </button>
      {
        buttons.map((elem, i) => {
          return (
            <button
            className="btn"
            name={elem}
            key={i}
            >
              {elem}
            </button>
          )
        })
      }
      <button
            className="btn"
            name={ 'equal' }
            >
              =
      </button>
      
    </div>
  )
}

export default Buttons;