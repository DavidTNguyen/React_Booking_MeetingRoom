import React, {Component} from 'react';
import './BookingItemListTemplate.css';


const BookingItemListTemplate2 = ({form, form2, children}) => {
    return(
        <main className = "booking-list-template">
            <div className = "booking-lists">
                <div className = "title">
                    Current Reservation Lists
                </div>
            </div>
            <section className = "form-wrapper">
                {form} {form2}
            </section>

            <section className = "bookinglists-wrapper">
                {children}
            </section>
        </main>
    )

}
    

export default BookingItemListTemplate2