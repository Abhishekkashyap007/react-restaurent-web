import React from 'react'
import ServicesCSS from './../Services/Services.module.css'

function Services() {
    return (
        <div className={`${ServicesCSS.Service_wrapper} section`}>
            <small className='section_Heading'>Facilities</small>
            <h2 className='section_Title'>Our Best <span>Services</span></h2>

            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Service_card}>
                    <i className='ri-hotel-line'></i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception /Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- WiFi & Parking</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className='ri-hotel-line'></i>
                    <h3>Room Amentities</h3>
                    <p>- Comfortable Bedding</p>
                    <p>- Bed Rooms</p>
                    <p>- TV and AC</p>
                    <p>- 24/7 Electricity</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className='ri-goblet-line'></i>
                    <h3>Dinning Options</h3>
                    <p>- Hotel Food Service</p>
                    <p>- Lounge</p>
                    <p>- Canteen</p>
                    <p>- Room Service</p>
                </div>
                <div className={ServicesCSS.Service_card}>
                    <i className='ri-restaurant-line'></i>
                    <h3>Special Features</h3>
                    <p>- Customs Rooms</p>
                    <p>- Walking Ground</p>
                    <p>- View Point</p>
                </div>
            </div>
        </div>
    )
}

export default Services
