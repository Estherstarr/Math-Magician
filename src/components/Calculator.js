import React, { Component } from 'react';
/* eslint-disable */

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calcMainContainer">
        <div className="calcDisplay">0</div>
        <div className="calcKeysContainer">
          <div className="calcKeys">
            <div className="calcNumbers">
              <b>AC</b>
              <b>+/-</b>
              <b>%</b>
            </div>
            <div className="calcNumbers">
              <b>7</b>
              <b>8</b>
              <b>9</b>
            </div>
            <div className="calcNumbers">
              <b>4</b>
              <b>5</b>
              <b>6</b>
            </div>
            <div className="calcNumbers">
              <b>1</b>
              <b>2</b>
              <b>3</b>
            </div>
            <div className="calcNumbers footer">
              <b>0</b>
              <b>.</b>
            </div>
          </div>
          <div className="calcSymbols">
            <b>÷</b>
            <b>×</b>
            <b>-</b>
            <b>+</b>
            <b>=</b>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
