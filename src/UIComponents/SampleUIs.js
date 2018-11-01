import React, { Component } from 'react';


//import './App.css';

import Booking from './Booking';
//import DateTimePicker from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Counter from './Counter';
import DatePickerUI from './DatePickerUI';
import TimePickerUI from './TimePickerUI';
import DateTimePickerUI from './DateTimePickerUI';
import SelectControlUI from './SelectControlUI';
import TimeSlot from './TimeSlot';

//for test
import JQuerySample from './jQuerySample';




class SampleUIs extends Component {

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

        <p />
        <TimeSlot />
      </div>
    );
  }


}


export default SampleUIs;
