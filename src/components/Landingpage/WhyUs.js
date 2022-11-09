import React from 'react';
import IconComplete from '../../assets/icon_complete.png'
import IconPrice from '../../assets/icon_price.png'
import IconClock from '../../assets/icon_24hrs.png'
import IconProfessional from '../../assets/icon_professional.png'

const TextSize = {
    Big: {
        fontSize: "24px",
    },
    Medium: {
        fontSize: "16px",
    },
    Small: {
        fontSize: "14px",
    },
}

const WhyUs = () => {
    return (
        <section id="whyus">
            <div className="container pt-5">
                <h1 style={TextSize.Big} className="fw-bold lh-2 mb-3">Why Us?</h1>
                <p className=" mb-5">Mengapa harus pilih Binar Car Rental?</p>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={IconComplete} className="mb-3" alt=''/>
                                <h5 style={TextSize.Medium} className="card-title">Mobil Lengkap</h5>
                                <p style={TextSize.Small} className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={IconPrice} className="mb-3" alt=''/>
                                <h5 style={TextSize.Medium} className="card-title">Harga Murah</h5>
                                <p style={TextSize.Small} className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={IconClock} className="mb-3" alt=''/>
                                <h5 style={TextSize.Medium} className="card-title">Layanan 24 Jam</h5>
                                <p style={TextSize.Small} className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={IconProfessional} className="mb-3" alt=''/>
                                <h5 style={TextSize.Medium} className="card-title">Sopir Profesional</h5>
                                <p style={TextSize.Small} className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;