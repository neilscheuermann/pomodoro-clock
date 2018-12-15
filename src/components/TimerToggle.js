import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TimerToggle = props => {
  const {time} = props;

  return (
    <div>
      <button>
        <FontAwesomeIcon icon="angle-down" size='2x' />
      </button>
      <p>{time}</p>
      <button>
        <FontAwesomeIcon icon="angle-up" size='2x' />
      </button>
    </div>
  )
}

export default TimerToggle
