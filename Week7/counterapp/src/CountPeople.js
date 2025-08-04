import React, { Component } from 'react';
import './CountPeople.css'; // ✅ import CSS file

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>People Counter</h1>
        <h2>Entry Count: {this.state.entryCount}</h2>
        <h2>Exit Count: {this.state.exitCount}</h2>
        <button onClick={this.updateEntry}>Login</button>
        <button onClick={this.updateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
