import React ,{Component} from 'react';
import './BookingForm.css';
import RoomSelect from '../UIComponents/RoomSelect'

const BookingForm2 = ({value, onChange, onCreate, onKeyPress}) =>{
    return(
        <div className = "form">
            <RoomSelect value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress} />
        </div>
    )
}

export default BookingForm2
