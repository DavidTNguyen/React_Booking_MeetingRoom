import React ,{Component} from 'react';
import './BookingForm.css';

const BookingForm = ({value, onChange, onCreate, onKeyPress}) =>{
    return(
        <div className = "form">
            <input value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress}/>
            <div className ="create-button" onClick={onCreate}>
                Reservation
            </div>
        </div>
    )
}

export default BookingForm
