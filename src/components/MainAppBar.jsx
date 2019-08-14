import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'linear-gradient(180deg, #800000, #4d0000)'
    },
    appBarLink: {
        textTransform: "uppercase",
    },
    title: {
        marginRight: theme.spacing(6),
    },
    appButton: {
        margin: theme.spacing(2),
    },
    loginButton: {
        margin: theme.spacing(2),
    },
    menuButton: {
        margin: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
}));

export default withRouter(function MainAppBar(props) {
    const classes = useStyles();

    return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Tarkov Guides
                </Typography>
                <Button className={classes.appButton}>
                    <Link
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Home
                    </Link>
                </Button>
                <Button className={classes.appButton}>
                    <Link
                        component={RouterLink}
                        to="/guides"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Guides
                    </Link>
                </Button>
                <Button className={classes.appButton}>
                    <Link
                        component={RouterLink}
                        to="/maps"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Maps
                    </Link>
                </Button>
                <Button className={classes.appButton}>
                    <Link
                        component={RouterLink}
                        to="/modding"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Modding
                    </Link>
                </Button>
                <Button className={classes.appButton}>
                    <Link
                        component={RouterLink}
                        to="/keys"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Keys
                    </Link>
                </Button>
                <div className={classes.grow} />
                <Button color="inherit" className={classes.loginButton}>
                    <Link
                        component={RouterLink}
                        to="/login"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Login
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
});
