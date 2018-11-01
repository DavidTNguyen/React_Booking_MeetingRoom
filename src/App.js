import React, { Component } from 'react';


import './App.css';
import BookingItemListTemplate from './BookingComponents/BookingItemListTemplate';
import BookingItemListTemplate2 from './BookingComponents/BookingItemListTemplate2';
import BookingForm from './BookingComponents/BookingForm';
import BookingForm2 from './BookingComponents/BookingForm2';
import DateTimeForm from './BookingComponents/DateTimeForm';
//import SampleUIs;
import SampleUIs from './UIComponents/SampleUIs';


class App extends Component {

  render() { 

    return (
      <main>
        <header className="App-header"><h1>Welcome to the Meeting Room Reservation System</h1></header>
        <div className="App">
          {/* <BookingItemListTemplate form={<BookingForm />}>
            This goes into the children props
          </BookingItemListTemplate> */}
          <BookingItemListTemplate2 form={<BookingForm2 />} form2 = {<DateTimeForm />} >
            This goes into the children props
          </BookingItemListTemplate2>
          



          <p />

        </div>
      </main>

    );
  }


}


export default App;
