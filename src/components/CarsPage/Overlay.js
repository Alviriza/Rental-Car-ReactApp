import React from 'react';

const Overlay = (props) => {
    const { zIndex, active } = props

    return (
        <span
            id="form-overlay"
            className={`overlay ${(active) ? "active" : ""}`}
            style={{ zIndex: zIndex }}
        ></span>
    )
}

export default Overlay;