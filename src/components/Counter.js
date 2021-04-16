import { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return <div className="count">Count: {this.props.count}</div>;
  }
}

export default connect(store => store)(Counter);
