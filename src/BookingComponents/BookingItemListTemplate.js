import React, {Component} from 'react';
import './BookingItemListTemplate.css';

const BookingItemListTemplate = ({form, children}) => {
    return(
        <main className = "booking-list-template">
            <div className = "booking-lists">
                <div className = "title">
                    Current Reservation Lists
                </div>
            </div>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "bookinglists-wrapper">
                {children}
            </section>
        </main>
    )

}
    

export default BookingItemListTemplate