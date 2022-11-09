import React from "react";

import Hero from "./Hero";
import Service from "./Service";
import WhyUs from "./WhyUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Service />
            <WhyUs />
            <Testimonial />
            <Banner />
            <FAQ />
        </>
    )
}

export default LandingPage;