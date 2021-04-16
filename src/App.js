import { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import CounterContainer from './components/CounterContainer';

export default class App extends Component {
  state = {
    count: 0,
  };

  upCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="App">
        <ButtonContainer handleClick={this.upCount}></ButtonContainer>
        <CounterContainer count={this.state.count}></CounterContainer>
      </div>
    );
  }
}
