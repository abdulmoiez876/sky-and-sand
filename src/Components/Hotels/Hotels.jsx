import React from 'react'
import AllHotelList from './HotelApi';
import DisplayHotel from './DisplayHotel';
import styles from './Hotels.module.css';

export default function Hotels(props) {
    const selectedCountry = props.selectedCountry;

    const arrayToBeDisplayed = AllHotelList.filter(hotel => {
        return hotel.country === selectedCountry;
    })
    return (
      <section id="hotels">
        <h2 className={`${styles.sectionBreaker} ${styles.h2}`}>Hotels</h2>
        <div className={`${styles.hotelsDisplay}`}>
            {
                arrayToBeDisplayed.map(hotel => {
                    return (
                        <DisplayHotel
                            key = {hotel.id}
                            id = {hotel.id}
                            country = {hotel.country}
                            city = {hotel.city}
                            contact = {hotel.contact}
                            name = {hotel.name}
                            rate = {hotel.price_per_night}
                            link = {hotel.ref}
                            img = {hotel.img}
                        />
                    )
                })
            }
        </div>
      </section>
    )
}
