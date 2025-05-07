import React from 'react'
import footerCSS from './../Footer/Footer.module.css'
import logoImg from '../../../public/logo.png'

function Footer() {
    return (
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <a href='#'><img src={logoImg}></img></a>
                    <p>Best Hotel in Dhikuli, Ramnagar which focus on the luxury, comfort stay of the tourist.</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Services</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>Blogs</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Near Cities</h3>
                <p>Kaladhungi</p>
                <p>Haldwani</p>
                <p>Ranikhet</p>
                <p>Nanital</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address : <span>The Corbett Caves Inn, Garjiya Road, Dhikuli, Ramnagar, 244715</span></p>
                <p>Email : <span>thecorbettcavesinn@gmail.com</span></p>
                <p>Phone : <span>8433070560</span></p>
            </div>
        </footer>
    )
}

export default Footer
