import { Component } from 'react';
import ButtonCard from './ButtonCard';

class ButtonContainer extends Component {
  render() {
    return (
      <div className="button-container">
        <ButtonCard handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default ButtonContainer;
