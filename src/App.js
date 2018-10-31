import React, { Component } from 'react';


import './App.css';

import Booking from './Components/Booking';
//import DateTimePicker from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Counter from './Components/Counter';
import DatePickerUI from './Components/DatePickerUI';
import TimePickerUI from './Components/TimePickerUI';
import DateTimePickerUI from './Components/DateTimePickerUI';
import SelectControlUI from './Components/SelectControlUI';

//for test
import JQuerySample from './Components/jQuerySample';




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
        <Button variant="contained" color="secondary" >
        secondary
        </Button>
        <p />

        <DatePickerUI />
        <p />
        <TimePickerUI />
        <p />
        <DateTimePickerUI />
        <p />
        <JQuerySample />
        <p />
        <SelectControlUI />
      </div>
    );
  }


}


export default App;
