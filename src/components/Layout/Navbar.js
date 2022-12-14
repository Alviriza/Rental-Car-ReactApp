import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light ps-4 pe-4">
            <div className="container-fluid">
                <a href="facebook.com" className="navbar-brand"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header pb-0">
                            <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">BCR</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="navbar-nav ms-auto">
                                <a className="nav-link me-4 text-black" href="#service">Our Service</a>
                                <a className="nav-link me-4 text-black" href="#why-us">Why Us</a>
                                <a className="nav-link me-4 text-black" href="#testi">Testimonial</a>
                                <a className="nav-link me-4 text-black" href="#faq">FAQ</a>
                                <a className="nav-link btn btn-success text-white fw-bold" href="#" id="btn-success">Register</a>
                            </div>
                        </div>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;