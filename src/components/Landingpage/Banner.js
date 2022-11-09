import React from 'react';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container pt-5">
                <div className="card text-center p-5 ">
                    <div className="card-body">
                        <h1 style={{fontSize:'36px'}} className="fw-bold mb-3">Sewa Mobil di Surabaya Sekarang</h1>
                        <p style={{fontSize:'14px'}} className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="facebook.com" className="btn btn-success">Mulai Sewa Mobil</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;