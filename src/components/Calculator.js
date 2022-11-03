import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  function buttonClick(event) {
    setState((state) => calculate(state, event.target.innerText));
  }

  const { total, next, operation } = state;
  return (
    <div className="calc-container">
      <div className="result-preview">
        { total }
        { operation }
        { next }
      </div>
      <button type="button" className="buttonKey" onClick={buttonClick}>AC</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>+/-</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>%</button>
      <button type="button" className="buttonKey colored" onClick={buttonClick}>÷</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>7</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>8</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>9</button>
      <button type="button" className="buttonKey colored" onClick={buttonClick}>x</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>4</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>5</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>6</button>
      <button type="button" className="buttonKey colored" onClick={buttonClick}>-</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>1</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>2</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>3</button>
      <button type="button" className="buttonKey colored" onClick={buttonClick}>+</button>
      <button type="button" className="buttonKey-2" onClick={buttonClick}>0</button>
      <button type="button" className="buttonKey" onClick={buttonClick}>.</button>
      <button type="button" className="buttonKey colored" onClick={buttonClick}>=</button>
    </div>
  );
}

export default Calculator;
