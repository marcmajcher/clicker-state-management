import { Component } from 'react';
import ButtonFrame from './ButtonFrame';

class ButtonCard extends Component {
  render() {
    return (
      <div className="button-card">
        <ButtonFrame handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default ButtonCard;
