import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logo: {
        minHeight: '10px',
        maxHeight: '20vh',
    },
    input: {
        display: 'none',
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '400px',
    },
    radioArea: {
        margin: '15px',
    },
}))

export default useStyles