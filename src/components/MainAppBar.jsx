import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function MainAppBar(props) {
    const classes = props.className;

    return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Tarkov Guides
                </Typography>
                <Button className={classes.loginButton}>
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
                <Button className={classes.loginButton}>
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
                <Button className={classes.loginButton}>
                    <Link
                        component={RouterLink}
                        to="/modding"
                        color="inherit"
                        className={classes.appBarLink}
                        underline="none"
                    >
                        Weapon Modding
                    </Link>
                </Button>
                <Button className={classes.loginButton}>
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
                {/*                        <Button color="inherit" className={classes.menuButton}>
                            Maps
                        </Button>
                        <Button color="inherit" className={classes.menuButton}>
                            Weapon Modding
                        </Button>
                        <Button color="inherit" className={classes.menuButton}>
                            Keys
                        </Button>*/}
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
}
