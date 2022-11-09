import React from 'react';
import CarImage from '../../assets/heromobil.png';

const Hero = () => {
    return (
        <section id="hero" className="d-flex justify-content-center">
            <div className="position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 welcome d-flex align-items-center">
                            <div className="welcome-text">
                                <h1 style={{fontSize:'36px'}} className="fw-bold lh-2 mb-3">Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
                                <p className="fw-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                                    dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24
                                    jam.</p>
                                <a className="btn text-white fw-bold btn-success" id="btn-success" href="/cars">Mulai Sewa Mobil</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="herocar mt-lg-0 mt-4">
                                <img src={CarImage} className="position-absolute" alt="car" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    )
}

export default Hero;