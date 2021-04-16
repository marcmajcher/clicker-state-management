import { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions'

class Button extends Component {

  render() {
    return  <div>
    <button onClick={() => this.props.dispatch(increment())}>INCREMENT</button>;
    <button onClick={() => this.props.dispatch(decrement())}>Click Me</button>;
    </div>
  }
}

export default connect((a) => a)(Button);
