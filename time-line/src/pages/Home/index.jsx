import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import useStyles from './useStyles'

import './styles.css'
import logoIcon from '../../assets/logo-linhasdotempo.gif'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function Home() {
    const classes = useStyles()

    const history = useHistory()

    const [anchorElUser, setAnchorElUser] = useState(null)
    const [anchorElAdd, setAnchorElAdd] = useState(null)
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const openUser = Boolean(anchorElUser)
    const openAdd = Boolean(anchorElAdd)

    //TimeLine Data
    const [timeLineName, setTimeLineName] = useState('')
    const [website, setWebsite] = useState('')
    const [resume, setResume] = useState('')
    const [canView, setCanView] = useState({ me: true, all: false, who: false })
    const [canEdit, setCanEdit] = useState({ me: true, all: false, who: false })

    async function handleNewTimeLine(e) {
        e.preventDefault()

        const data = {
            timeLineName,
            website,
            resume,
            canView,
            canEdit
        }

        try {
            const response = await api.post('linha', data)
            alert(`Linha do Tempo registrada com sucesso. ID da Linha: ${response.data.id}`)

            history.push(`/linha/buscar/${response.data.id}`)
        } catch (error) {
            alert(`Erro a criar Nova Linha: ${error}`)
        }
    }

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
                                        value={timeLineName}
                                        onChange={e => setTimeLineName(e.target.value)}
                                        label="Nome da Linha do Tempo"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        autoFocus
                                    />
                                    <TextField
                                        value={website}
                                        onChange={e => setWebsite(e.target.value)}
                                        label="WebSite"
                                        type="url"
                                        margin="normal"
                                        fullWidth
                                    />
                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file" className="photo-button">
                                        <IconButton
                                            color="primary"
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <PhotoCamera fontSize="large" />
                                        </IconButton>
                                    </label>
                                    <TextField
                                        value={resume}
                                        onChange={e => setResume(e.target.value)}
                                        label="Resumo da Linha do Tempo:"
                                        type="text"
                                        margin="normal"
                                        fullWidth
                                        multiline
                                        rows={6}
                                    />
                                    <div className={classes.radioArea}>
                                        Quem pode visualizar?
                                    </div>
                                    <div className={classes.radioArea}>
                                        <FormControl component="fieldset">
                                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                                <FormControlLabel
                                                    checked={canView.me}
                                                    onChange={() => {
                                                        setCanView({ me: true, all: false, who: false })
                                                    }}
                                                    control={<Radio color="primary" />}
                                                    label="Somente Eu"
                                                />
                                                <FormControlLabel
                                                    checked={canView.all}
                                                    onChange={() => {
                                                        setCanView({ me: false, all: true, who: false })
                                                    }}
                                                    control={<Radio color="primary" />}
                                                    label="Todos"
                                                />
                                                <FormControlLabel
                                                    checked={canView.who}
                                                    onChange={() => {
                                                        setCanView({ me: false, all: false, who: true })
                                                    }}
                                                    control={<Radio color="primary" />}
                                                    label="Quem"
                                                />
                                                <FormControlLabel
                                                    onChange={() => {
                                                        console.log(canView)
                                                    }}
                                                    // value="3"
                                                    control={<Radio color="primary" />}
                                                    label="Test State"
                                                />
                                            </RadioGroup>
                                        </FormControl>

                                    </div>
                                    <div className={classes.radioArea}>
                                        Quem pode publicar?
                                    </div>
                                    <div className={classes.radioArea}>
                                    <FormControl component="fieldset">
                                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                                <FormControlLabel
                                                    checked={canEdit.me}
                                                    onChange={() => {
                                                        setCanEdit({ me: true, all: false, who: false })
                                                    }}
                                                    control={<Radio color="primary" />}
                                                    label="Somente Eu"
                                                />
                                                <FormControlLabel
                                                    checked={canEdit.all}
                                                    onChange={() => {
                                                        setCanEdit({ me: false, all: true, who: false })
                                                    }}
                                                    control={<Radio color="primary" />}
                                                    label="Todos"
                                                />
                                                <FormControlLabel
                                                    checked={canEdit.who}
                                                    onChange={() => {
                                                        setCanEdit({ me: false, all: false, who: true })
                                                    }}
                                                    control={<Radio color="primary" />}
                                                    label="Quem"
                                                />
                                                <FormControlLabel
                                                    onChange={() => {
                                                        console.log(canEdit)
                                                    }}
                                                    // value="3"
                                                    control={<Radio color="primary" />}
                                                    label="Test State"
                                                />
                                            </RadioGroup>
                                        </FormControl>

                                    </div>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseAddDialog} color="primary">
                                        Cancelar
                                    </Button>
                                    <Button onClick={handleNewTimeLine} color="primary">
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