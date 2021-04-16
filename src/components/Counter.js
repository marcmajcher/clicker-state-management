import { Component } from 'react';

export default class Counter extends Component {
  render() {
    return <div className="count">Count: {this.props.count}</div>;
  }
}
