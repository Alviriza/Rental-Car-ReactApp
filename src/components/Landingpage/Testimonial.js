import React from 'react';
import AvatarMan from '../../assets/avatar1.png'
import AvatarWoman from '../../assets/avatar2.png'
import Rate from '../../assets/rate.svg'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const Carousel = {
        loop: true,
        center: true,
        nav: true,
        navText: [
            "<button class='carousel-ctrl-prev rounded-circle'><</button>", 
            "<button class='carousel-ctrl-next rounded-circle'>></button>"
        ],
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1200: {
                items: 2,
            },
		},
    }
    return (
        <section id="testimonial">
            <div className="containers">
                <div className="heading d-flex align-items-center flex-column">
                    <h1 style={{fontSize:'24px'}} className="fw-bold">Testimonial</h1>
                    <p className="mb-5 px-3">Berbagai review positif dari para pelanggan kami</p>
                </div>
                <OwlCarousel className="owl-theme" {...Carousel}>
                    <div className="item">
                        <div className="row g-2 pt-3">
                            <div className="col-md-4">
                                <img style={{width: '80px'}} src={AvatarMan} className="pt-5 ms-4" alt=''/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-text"><img style={{width: '80px'}} src={Rate} alt=''/></h5>
                                    <p className="card-text cust">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore. consectetur adipiscing elit, sed do eiusmod. Quis aute iure reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</p>
                                    <p className="card-text cust fw-bold">John Doe 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row g-2 pt-3">
                            <div className="col-md-4">
                                <img style={{width: '80px'}} src={AvatarWoman} className="pt-5 ms-4" alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-text"><img style={{width: '80px'}} src={Rate} alt=''/></h5>
                                    <p className="card-text cust">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore. consectetur adipiscing elit, sed do eiusmod. Quis aute iure reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</p>
                                    <p className="card-text cust fw-bold">John Doe 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row g-2 pt-3">
                            <div className="col-md-4">
                                <img style={{width: '80px'}} src={AvatarMan} className="pt-5 ms-4" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-text"><img style={{width: '80px'}} src={Rate} alt=''/></h5>
                                    <p className="card-text cust">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore. consectetur adipiscing elit, sed do eiusmod. Quis aute iure reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</p>
                                    <p className="card-text cust fw-bold">John Doe 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}

export default Testimonial;