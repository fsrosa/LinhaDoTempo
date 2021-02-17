import React from 'react'

import './Header.css'
import logoIcon from '../../assets/logo-linhasdotempo.gif'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = (props) => {
    return (
        <div className="header-container">
            <AppBar position="static" className="appbar">
                <Toolbar className="toolbar">
                    <Typography>
                        <img src={logoIcon} className="logo-icon" alt="timeline-logo" />
                    </Typography>
                    <Typography variant="h6" color="primary">
                        Sobre
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
