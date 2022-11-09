import { useEffect, useState } from "react";
import Hero from "./Hero";

import Overlay from "./Overlay";
import Car from "./Search/Car";
import CarForm from "./Search/CarForm";
import "./CarsPage.css"

const CarsPage = () => {
    const handleSubmit = value => {
        console.log('====================================');
        console.log(value);
        console.log('====================================');
        const filteredCars = cars.filter(car => {
            let isValid = true;

            if (!car.available) isValid = false;
            if (value.peopleAmount != "" && value.peopleAmount > car.capacity) isValid = false;

            const timezone = "+0700"
            const inputDate = value.pickupDate.split("-");
            const inputDay = inputDate[0];
            const inputMonth = inputDate[1];
            const inputYear = inputDate[2];
            const inputTime = value.pickupTime.replace(".", ":");

            // ISO 8601 time format
            const formattedInputTime = `${inputYear}-${inputMonth}-${inputDay}T${inputTime}:00${timezone}`

            const carAvailableTime = new Date(car.availableAt)
            const selectedDateTime = new Date(formattedInputTime);

            if (carAvailableTime > selectedDateTime) isValid = false;

            return isValid
        })

        if (filteredCars.length < 1) {
            setAppendElement(<span className="no-result-text">No Car Found...</span>)
        } else {
            const carsResult = filteredCars.map((car, index) =>
                <Car data={car} key={index} />
            )
            setAppendElement(carsResult)
        }

    }

    const [overlayActive, setOverlayActive] = useState(false)
    const [cars, setCars] = useState([])
    const [appendElement, setAppendElement] = useState("");

    useEffect(() => {
        document.title = "Cari Mobil"
        const fetchCarData = async () => {
            const response = await fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
            const data = await response.json()
            setCars(data)
        }
        fetchCarData()
    }, [])

    return (
        <>
            <Hero />
            <Overlay zIndex={5} active={overlayActive} />

            <section id="search">
                <CarForm parentHandler={handleSubmit} overlayHandler={setOverlayActive} />
                <div id="search-result" className="flex-row flex-gap-24">
                    {appendElement}
                </div>
            </section>
        </>
    )
}

export default CarsPage;