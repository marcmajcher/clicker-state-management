import { Component } from 'react';
import CounterFrame from './CounterFrame';

export default class CounterContainer extends Component {
  render() {
    return <CounterFrame count={this.props.count} />;
  }
}
