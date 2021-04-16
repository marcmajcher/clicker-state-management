import { Component } from 'react';
import Counter from './Counter';

export default class CounterCard extends Component {
  render() {
    return <Counter count={this.props.count} />;
  }
}
