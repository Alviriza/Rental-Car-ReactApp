import "./Car.css"

import IconPeople from "../../../assets/icon_people.svg"
import IconSetting from "../../../assets/icon_settings.svg"
import IconCalendar from "../../../assets/icon_calendar.svg"

const Car = (props) => {
    const {
        data = {
            image,
            manufacture,
            model,
            rentPerDay,
            description,
            capacity,
            transmission,
            year,
        }
    } = props

    return (
        <div className="card-deck mb-5">
            <div className="result-card flex-row flex-gap-16">
                <img src={data.image} alt={data.manufacture} />
                <div className="result-car-text flex-column flex-gap-8">
                    <span>{data.manufacture} - {data.model}</span>
                    <span className="title">Rp {data.rentPerDay} / hari</span>
                    <p>{data.description}</p>
                    <div className="car-data flex-column flex-gap-16">
                        <div>
                            <img src={IconPeople} alt="" />
                            <span>{data.capacity} orang</span>
                        </div>
                        <div>
                            <img src={IconSetting} alt="" />
                            <span>{data.transmission}</span>
                        </div>
                        <div>
                            <img src={IconCalendar} alt="" />
                            <span>Tahun {data.year}</span>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success">Pilih Mobil</button>
            </div>
        </div>
    )
}

export default Car;