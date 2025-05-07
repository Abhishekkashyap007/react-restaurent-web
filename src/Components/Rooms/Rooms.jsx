import React from 'react'
import roomsCSS from './../Rooms/Rooms.module.css'

function Rooms() {
    return (
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small className='section_Heading'>Luxury Suites</small>
            <h2 className='section_Title'>Our Best <span>Rooms</span></h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                            <button>Delux Room</button>
                        </div>
                        <div className={roomsCSS.Card_Back}>
                            <div className={roomsCSS.price}>
                                <p>24*7 availability</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Facilities</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - WiFi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                            <button>Shower Enclosure</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back2}`}>
                            <div className={roomsCSS.price}>
                                <p>24*7 availability</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Facilities</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - WiFi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                            <button>Living Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back3}`}>
                            <div className={roomsCSS.price}>
                                <p>24*7 availability</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Facilities</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - WiFi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                            <button>Parking Area</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back4}`}>
                            <div className={roomsCSS.price}>
                                <p>24*7 availability</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Facilities</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - WiFi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front5}`}>
                            <button>Exclusive Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back5}`}>
                            <div className={roomsCSS.price}>
                                <p>24*7 availability</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Facilities</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - WiFi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front6}`}>
                            <button>Personal Room</button>
                        </div>
                        <div className={`${roomsCSS.Card_Back} ${roomsCSS.Card_Back6}`}>
                            <div className={roomsCSS.price}>
                                <p>24*7 availability</p>
                            </div>
                            <div className={roomsCSS.Card_content}>
                                <h3>Facilities</h3>
                                <p> - Daily Clening</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - WiFi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
