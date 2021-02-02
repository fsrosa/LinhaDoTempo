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
        alignItems: 'center',
        minWidth: '400px',
    },
    radioArea: {
        margin: '15px',
    },
}))

export default useStyles