import { Component } from 'react';
import Button from './Button';

class ButtonFrame extends Component {
  render() {
    return <Button handleClick={this.props.handleClick} />;
  }
}
export default ButtonFrame;
