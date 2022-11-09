import { useDispatch, useSelector } from "react-redux"
import { saveDriverType, savePickupDate, savePickupTime, savePeopleAmount } from "./CarFormSlice"
import { useState } from "react"

import InputDate from "../Form/InputDate"
import InputDropdown from "../Form/InputDropdown"
import InputText from "../Form/InputText"
import "../Form/Form.css"

import IconPeople from "../../../assets/icon_people.svg"

export default function ({ parentHandler, overlayHandler }) {
    const formValue = useSelector(state => state.carForm.value)
    const dispatch = useDispatch()

    const validation = (arr) => {
        let isValid = true
        arr.forEach(element => {
            if (element == null || element == "" || element == false) isValid = false
        });
        return isValid
    }

    const clickHandler = (e) => {
        parentHandler(formValue)
    }

    return (
        <div id="car-form">
            <InputDropdown
                varName="driverType"
                label="Tipe Driver"
                placeholder="Pilih Tipe Driver"
                option={{
                    withDriver: "Dengan Sopir",
                    noDriver: "Tanpa Sopir (Lepas Kunci)"
                }}
                parentHandler={value => dispatch(saveDriverType(value))}
                overlayHandler={overlayHandler}
            />

            <InputDate
                varName="pickupDate"
                label="Tanggal"
                placeholder="Pilih Tanggal"
                parentHandler={value => dispatch(savePickupDate(value))}
                value={formValue.pickupDate}
                overlayHandler={overlayHandler}
            />

            <InputDropdown
                type="time"
                varName="pickupTime"
                label="Waktu Jemput"
                placeholder="Pilih Waktu Jemput"
                option={{
                    "08.00": "08.00",
                    "09.00": "09.00",
                    "10.00": "10.00",
                    "11.00": "11.00",
                    "12.00": "12.00"
                }}
                parentHandler={value => dispatch(savePickupTime(value))}
                overlayHandler={overlayHandler}
            />

            <InputText
                label="Jumlah Penumpang (optional)"
                placeholder="Jumlah Penumpang"
                varName="peopleAmount"
                icon={IconPeople}
                parentHandler={value => dispatch(savePeopleAmount(value))}
                type="number"
                overlayHandler={overlayHandler}
            />

            <button
                id="search-car-btn"
                className={`btn btn-success ${(validation([formValue.driverType, formValue.pickupDate, formValue.pickupTime])) ? "" : "disabled"}`}
                onClick={clickHandler}
            >
                Cari Mobil
            </button>
        </div>
    )
}