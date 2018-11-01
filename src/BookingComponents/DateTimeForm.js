import React ,{Component} from 'react';
import './BookingForm.css';
import DateTimeSelect from '../UIComponents/DateTimeSelect'

const DateTimeForm = ({value, onChange, onCreate, onKeyPress}) =>{
    return(
        <div className = "form">
            <DateTimeSelect value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress} />
            <div className ="create-button" onClick={onCreate}>
                Reservation
            </div>
        </div>
    )
}

export default DateTimeForm
