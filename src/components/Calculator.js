import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,

      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { obj } = this.state;
    this.setState({
      obj: calculate(obj, buttonName),
    });
  }

  render() {
    const { obj: obj2 } = this.state;

    return (
      <div className="calcMainContainer">
        <div className="calcDisplay">{obj2.next || obj2.operation || obj2.total || 0 }</div>
        <div className="calcKeysContainer">
          <div className="calcKeys">
            <div className="calcNumbers">
              <button type="button" onClick={() => this.handleClick('AC')}>AC</button>
              <button type="button" onClick={() => this.handleClick('+/-')}>+/-</button>
              <button type="button" onClick={() => this.handleClick('%')}>%</button>
            </div>
            <div className="calcNumbers">
              <button type="button" onClick={() => this.handleClick('7')}>7</button>
              <button type="button" onClick={() => this.handleClick('8')}>8</button>
              <button type="button" onClick={() => this.handleClick('9')}>9</button>
            </div>
            <div className="calcNumbers">
              <button type="button" onClick={() => this.handleClick('4')}>4</button>
              <button type="button" onClick={() => this.handleClick('5')}>5</button>
              <button type="button" onClick={() => this.handleClick('6')}>6</button>
            </div>
            <div className="calcNumbers">
              <button type="button" onClick={() => this.handleClick('1')}>1</button>
              <button type="button" onClick={() => this.handleClick('2')}>2</button>
              <button type="button">3</button>
            </div>
            <div className="calcNumbers footer">
              <button type="button" onClick={() => this.handleClick('0')}>0</button>
              <button type="button" onClick={() => this.handleClick('.')}>.</button>
            </div>
          </div>
          <div className="calcSymbols">
            <button type="button" className="calcSymbolsColor" onClick={() => this.handleClick('÷')}>÷</button>
            <button type="button" className="calcSymbolsColor" onClick={() => this.handleClick('×')}>×</button>
            <button type="button" className="calcSymbolsColor" onClick={() => this.handleClick('-')}>-</button>
            <button type="button" className="calcSymbolsColor" onClick={() => this.handleClick('+')}>+</button>
            <button type="button" className="calcSymbolsColor" onClick={() => this.handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
