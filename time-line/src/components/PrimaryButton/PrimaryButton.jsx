import React, { useState } from 'react'
import './PrimaryButton.css';

const PrimaryButton = (props) => {
    const [variant] = useState(props.variant)

    return (
        <button className={`btn btn-${variant}`} tipe="submit">
            {props.children}
        </button>
    )
}

export default PrimaryButton