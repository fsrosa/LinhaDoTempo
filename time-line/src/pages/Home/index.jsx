import React, { useState } from 'react'
import './styles.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle'
import logoIcon from '../../assets/logo-linhasdotempo.gif'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxHeight: "5rem",
    },
}))

export default function Home() {
    const classes = useStyles()
    // const [auth, setAuth] = useState(true)
    const auth = true
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    // const handleChange = (event) => {
    //     setAuth(event.target.checked)
    // }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (event) => {
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className="home-toolbar">
                    <IconButton className={classes.menuButton} edge="start" color="primary" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <img
                            className={classes.logo}
                            src={logoIcon}
                            alt="timeline-logo"
                        ></img>
                    </Typography>
                    {auth && (
                        <div className="home-user-icon">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="primary"
                            >
                                <h6>Fabrício Rosa</h6>
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                onClose={handleClose}

                            >
                                <MenuItem>Minha Conta</MenuItem>
                                <MenuItem>Minhas Histórias</MenuItem>
                                <MenuItem>Minhas Linhas do Tempo</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>

    )
}