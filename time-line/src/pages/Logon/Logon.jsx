import React from 'react'

import './Logon.css'

import Header from '../../components/Header/Header.jsx'
import BoxLogin from '../../components/BoxLogin/BoxLogin.jsx'

const Logon = () => {
    return (
        <div className="logon-container">
            <Header color="dark"/>
            <BoxLogin />
        </div>
    )
}

export default Logon