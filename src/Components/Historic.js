import React, { useContext } from 'react';
import CalcContext from '../context/CalcContext';

import '../Styles/Historic.css'

function Historic () {

  const {hist} = useContext(CalcContext)

  return(
    <div className="hist-body">
      <h2>Histórico de operações</h2>
      <ul className="list">
        {
          hist.map((e, i) => i<9 ? <li key={i}>{e}</li> : '')
        }
      </ul>
    </div>
  )
}

export default Historic;