import React, { useContext } from 'react';

import CalcContext from '../context/CalcContext';

import '../Styles/Screen.css'

function Screen() {

  const { exp, renderResult } = useContext(CalcContext)

  return (
    <div className="screen">
      <div className="up">
        {exp}
      </div>
      <div className="down">
        <div>
          {renderResult(exp)}
        </div>
      </div>
      
    </div>
  )
}

export default Screen;