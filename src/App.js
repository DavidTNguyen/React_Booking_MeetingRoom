import React, { Component } from 'react';


import './App.css';

import Booking from './Components/Booking';
//import DateTimePicker from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Counter from './Components/Counter';
import DatePickerUI from './Components/DatePickerUI';
import TimePickerUI from './Components/TimePickerUI';
import DateTimePickerUI from './Components/DateTimePickerUI';




class App extends Component {
  render() { 
    return (
      <div className="App">
        <Booking />
        <p />

        <Counter />
        <p />
        
        <Button variant = "contained" color="primary">Hello</Button>
        <p />

        <DatePickerUI />
        <p />
        <TimePickerUI />
        <p />
        <DateTimePickerUI />

      </div>
    );
  }


}


export default App;
