import React, { Component } from "react";
 
class Counter extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      number: 0,
      number2: 0
    };
  }
  
  render() {
    const { number } = this.state;
    const { number2 } = this.state;
    return (
      <div>
        <div>
          <h1>{number}</h1>
          <button
            onClick={() => {
              this.setState({ number: number + 2 });
          }}>
          +2
          </button>
          <button
            onClick={() => {
              this.setState({ number: number - 1 });
          }}>
          -1
          </button>
        </div>
        <div>
          <h1>{number2}</h1>
          <button
            onClick={() => {
              this.setState({ number2: number2 + 1 });
          }}>
          +1
          </button>
          <button
            onClick={() => {
              this.setState({ number2 : number2 - 2 });
          }}>
          -2
          </button>
        </div>  
      </div>
    );
  }
}
 
export default Counter;