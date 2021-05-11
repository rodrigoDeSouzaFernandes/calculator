import React, { useState } from 'react';

import CalcContext from './CalcContext';

function Provider({children}) {

  const [exp, setExp] = useState('')
  const [hist, setHist] = useState([])

  const renderResult = (string) => {
    if(string[string.length-1] <= 9) {
      return Math.round(eval(string)*100)/100
    }  
    else {
      return ''
    }
  }

  const context = {
    exp,
    setExp,
    renderResult,
    hist,
    setHist,
  };

  return (
    <CalcContext.Provider value={context}>
      {children}
    </CalcContext.Provider>
  )
}

export default Provider;