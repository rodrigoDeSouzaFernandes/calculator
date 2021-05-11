import React, { useState } from 'react';

import CalcContext from './CalcContext';

function Provider({children}) {

  const [exp, setExp] = useState('')

  const renderResult = (string) => {
    if(string[string.length-1] <= 9) {
      return eval(string)
    }  
    else {
      return ''
    }
  }

  const context = {
    exp,
    setExp,
    renderResult,
  };

  return (
    <CalcContext.Provider value={context}>
      {children}
    </CalcContext.Provider>
  )
}

export default Provider;