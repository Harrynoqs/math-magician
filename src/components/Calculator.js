import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-container">
        <div className="result-preview">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>AC</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>+/-</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>%</button>
        <button type="button" className="buttonKey colored" onClick={this.buttonClick}>÷</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>7</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>8</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>9</button>
        <button type="button" className="buttonKey colored" onClick={this.buttonClick}>x</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>4</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>5</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>6</button>
        <button type="button" className="buttonKey colored" onClick={this.buttonClick}>-</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>1</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>2</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>3</button>
        <button type="button" className="buttonKey colored" onClick={this.buttonClick}>+</button>
        <button type="button" className="buttonKey-2" onClick={this.buttonClick}>0</button>
        <button type="button" className="buttonKey" onClick={this.buttonClick}>.</button>
        <button type="button" className="buttonKey colored" onClick={this.buttonClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
