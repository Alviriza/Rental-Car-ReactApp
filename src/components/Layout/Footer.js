import React from 'react';
import IconFacebook from '../../assets/icon_facebook.png'
import IconInstagram from '../../assets/icon_instagram.png'
import IconTwitter from '../../assets/icon_twitter.png'
import IconMail from '../../assets/icon_mail.png'
import IconTwitch from '../../assets/icon_twitch.png'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col address">
                        <p>Jalan Suroyo No. 161 Mayangan Kota<br />Probolinggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col navigation mb-3">
                        <a href="#service" className="nav-link">
                            <p className="fw-semibold">Our Service</p>
                        </a>
                        <a href="#why-us" className="nav-link">
                            <p className="fw-semibold">Why Us</p>
                        </a>
                        <a href="#testi" className="nav-link">
                            <p className="fw-semibold">Testimonial</p>
                        </a>
                        <a href="#FAQ" className="nav-link">
                            <p className="fw-semibold mb-0">FAQ</p>
                        </a>
                    </div>
                    <div className="col sosmed">
                        <p>Connect with us</p>
                        <div className="icon-group mb-3">
                            <a href="facebook.com"><img src={IconFacebook} className="me-3" alt="facebook icon" /></a>
                            <a href="instagram.com"><img src={IconInstagram} className="me-3" alt="instagram icon" /></a>
                            <a href="twitter.com"><img src={IconTwitter} className="me-3" alt="twitter icon" /></a>
                            <a href="gmail.com"><img src={IconMail} className="me-3" alt="mail icon" /></a>
                            <a href="twitch.com"><img src={IconTwitch} alt="twitch icon" /></a>
                        </div>
                    </div>
                    <div className="col copyright">
                        <p>Copyright Binar 2022</p>
                        <div className="navbar-brand"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;