import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  handleStart = () => {
    this.setState({ isCounting: true });
    this.timerId = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  handleStop =()=>{
    this.setState({ isCounting: false });
    clearInterval(this.timerId);
  }

  handleReset=()=>{
    clearInterval(this.timerId);
    this.setState({isCounting: false, count: 0})
  }


  componentDidMount() {
    const userTimer = localStorage.getItem('timer');
    if(userTimer){
      this.setState({count : +userTimer});
    }

   }


  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount() { 
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}