import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { incrementBreak, decrementBreak, incrementSession, decrementSession } from '../store';
import { connect } from 'react-redux';

class TimerToggle extends Component {

  handleIncrement = () => {
    if (this.props.timer === 'break') {
      this.props.incrementBreak();
    }
    if (this.props.timer === 'session') {
      this.props.incrementSession();
    }
  }

  handleDecrement = () => {
    if (this.props.timer === 'break') {
      this.props.decrementBreak();
    }
    if (this.props.timer === 'session') {
      this.props.decrementSession();
    }
  }

  render() {
    const {time} = this.props;

    return (
      <div id='timer-toggle'>
        <button className='timer-toggle-content' onClick={this.handleDecrement}>
          <FontAwesomeIcon icon="angle-down" size='2x'/>
        </button>
        <p className='timer-toggle-content'>{time}</p>
        <button className='timer-toggle-content' onClick={this.handleIncrement}>
          <FontAwesomeIcon icon="angle-up" size='2x' />
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  incrementBreak: () => dispatch(incrementBreak()),
  incrementSession: () => dispatch(incrementSession()),
  decrementBreak: () => dispatch(decrementBreak()),
  decrementSession: () => dispatch(decrementSession())
})

export default connect(null, mapDispatchToProps)(TimerToggle);
