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
import { makeStyles } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import logoIcon from '../../assets/logo-linhasdotempo.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logo: {
        maxHeight: "5rem",
    },
    input: {
        display: 'none',
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    },
}))

export default function Home() {
    const classes = useStyles()
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [anchorElAdd, setAnchorElAdd] = useState(null)
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const openUser = Boolean(anchorElUser)
    const openAdd = Boolean(anchorElAdd)

    const handleMenuUser = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUser = (event) => {
        setAnchorElUser(null)
    }

    const handleMenuAdd = (event) => {
        setAnchorElAdd(event.currentTarget)
    }

    const handleCloseAdd = (event) => {
        setAnchorElAdd(null)
    }

    const handleClickOpenAddDialog = (event) => {
        setAnchorElAdd(null)
        setOpenAddDialog(true)
    }

    const handleCloseAddDialog = (event) => {
        setOpenAddDialog(false)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className="home-toolbar">
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        color="primary"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <img
                            className={classes.logo}
                            src={logoIcon}
                            alt="timeline-logo"
                        ></img>
                        <div className="add-container">
                            <IconButton
                                aria-label="add action"
                                aria-haspopup="true"
                                aria-controls="menu-add"
                                onClick={handleMenuAdd}
                            >
                                <AddCircleOutlineIcon
                                    color="primary"
                                    fontSize="large"
                                />
                            </IconButton>
                            <Menu
                                id="menu-add"
                                anchorEl={anchorElAdd}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                open={openAdd}
                                onClose={handleCloseAdd}
                            >
                                <MenuItem onClick={handleCloseAdd}>Adicionar História</MenuItem>
                                <MenuItem onClick={handleClickOpenAddDialog}>Adicionar Linha do Tempo</MenuItem>
                            </Menu>
                            <Dialog open={openAddDialog} onClose={handleCloseAddDialog} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Adicionar Linha do Tempo</DialogTitle>
                                <DialogContent className={classes.dialog}>
                                    <TextField
                                        autoFocus
                                        label="Nome da Linha do Tempo"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="WebSite"
                                        type="url"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <IconButton 
                                            color="primary" 
                                            aria-label="upload picture" 
                                            component="span"
                                        >
                                            <PhotoCamera fontSize="large"/>
                                        </IconButton>
                                    </label>
                                    <TextField
                                        label="Resumo da Linha do Tempo:"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        multiline
                                        rows={6}
                                    />
                                </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCloseAddDialog} color="primary">
                                            Cancelar
                                    </Button>
                                        <Button onClick={handleCloseAddDialog} color="primary">
                                            Salvar
                                    </Button>
                                    </DialogActions>
                            </Dialog>
                        </div>
                    </Typography>
                        <div className="home-user-icon">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenuUser}
                                color="primary"
                            >
                                <h6>Ana Santos</h6>
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openUser}
                                onClose={handleCloseUser}

                            >
                                <MenuItem onClick={handleCloseUser}>Minha Conta</MenuItem>
                                <MenuItem onClick={handleCloseUser}>Minhas Histórias</MenuItem>
                                <MenuItem onClick={handleCloseUser}>Minhas Linhas do Tempo</MenuItem>
                            </Menu>
                        </div>
                </Toolbar>
            </AppBar>
        </div>

    )
}