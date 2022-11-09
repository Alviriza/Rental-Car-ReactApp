import React from 'react';
import ServiceImage from '../../assets/img_service.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'


const Service = () => {
    return (
        <section id="services">
            <div className="container col-xxl-8">
                <div className="row align-items-center g-5 py-5">	
                    <div className="col-12 col-sm-6 col-lg-6">
                        <img src={ServiceImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
                    </div>      	
                    <div className="col-lg-6 services">
                        <h2 className="fw-bold lh-2 mb-3">Best Car Rental for any kind of trip in Surabaya!</h2>
                        <p>Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-3" />Sewa Mobil Dengan Supir di Surabaya 12 Jam</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-3" />Sewa Mobil Lepas Kunci di Surabaya 24 Jam</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-3" />Sewa Mobil Jangka Panjang Bulanan</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-3" />Gratis Antar - Jemput Mobil di Bandara</p>
                        <p><FontAwesomeIcon icon={faCircleCheck} className="me-3" />Layanan Airport Transfer / Drop In Out</p>
                    </div>		      	
                </div>
            </div>
        </section>
    )
}

export default Service;