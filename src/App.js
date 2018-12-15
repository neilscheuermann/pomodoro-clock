import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Only need to add this to the component that needs the icon, and add the idon to the library below in App.js.
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import TimerToggle from './components/TimerToggle';

// library.add(faIgloo)
library.add(faAngleDown, faAngleUp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div>
          <h2>Break Length</h2>
            <TimerToggle time={this.props.breakLength}/>

        </div>
        <div>
          <h2>Session Length</h2>
            <TimerToggle time={this.props.sessionLength} />
        </div>
        <div>
          Session
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  breakLength: state.breakLength,
  sessionLength: state.sessionLength
})

export default connect(mapStateToProps)(App);
