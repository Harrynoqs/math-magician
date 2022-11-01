import React from 'react';
import './App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calc-container">
        <div className="result-preview">{ result }</div>
        <div className="buttonKey">AC</div>
        <div className="buttonKey">+/-</div>
        <div className="buttonKey">%</div>
        <div className="buttonKey colored">÷</div>
        <div className="buttonKey">7</div>
        <div className="buttonKey">8</div>
        <div className="buttonKey">9</div>
        <div className="buttonKey colored">x</div>
        <div className="buttonKey">4</div>
        <div className="buttonKey">5</div>
        <div className="buttonKey">6</div>
        <div className="buttonKey colored">-</div>
        <div className="buttonKey">1</div>
        <div className="buttonKey">2</div>
        <div className="buttonKey">3</div>
        <div className="buttonKey colored">+</div>
        <div className="buttonKey-2">0</div>
        <div className="buttonKey">.</div>
        <div className="buttonKey colored">=</div>
      </div>
    );
  }
}

export default Calculator;
