import { Component } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer';
import CounterContainer from './components/CounterContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonContainer></ButtonContainer>
        <CounterContainer></CounterContainer>
      </div>
    );
  }
}
