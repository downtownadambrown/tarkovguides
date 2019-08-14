import React from 'react';
import MainAppBar from './MainAppBar';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
    },
    title: {
        marginRight: theme.spacing(6),
    },
    content: {
        flex: "1 0 auto",
    },
    footer: {
        marginTop: "auto",
        flexShrink: 0,
        background: 'linear-gradient(180deg, #800000, #4d0000)',
        marginTop: theme.spacing(2),
    },
    appBar: {
        background: 'linear-gradient(180deg, #800000, #4d0000)'
    },
    appBarLink: {
        textTransform: "uppercase",
    },
    loginButton: {
        margin: theme.spacing(2),
    },
    menuButton: {
        margin: theme.spacing(2),
    },
    hero: {
        margin: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
}));

export default function Home() { // eslint-disable-next-line
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const classes = useStyles();

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    <CssBaseline />
                    <MainAppBar className={classes}/>
                    <main>
                        {/* Hero unit */}
                        <div className={classes.hero}>
                            <Container maxWidth="sm">
                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Tarkov Guides
                                </Typography>
                                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                    If Escaping from Tarkov were easy, we wouldn't exist.
                                </Typography>
                                <div>
                                    <Grid container spacing={2} justify="center">
                                        <Grid item>
                                            <Button variant="contained" color="primary">
                                                Check out New Guides!
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" color="secondary">
                                                SomethingSomething
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Container>
                        </div>
                        <Container maxWidth="md">
                            {/* End hero unit */}
                            <Grid container spacing={4}>
                                {cards.map(card => (
                                    <Grid item key={card} xs={12} sm={6} md={4}>
                                        <Card>
                                            <CardMedia
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Heading
                                                </Typography>
                                                <Typography>
                                                    This is a media card. You can use this section to describe the content.
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" color="secondary">
                                                    View
                                                </Button>
                                                <Button size="small" color="secondary">
                                                    Edit
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </main>
                </div>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        TarkovGuides.com - Copyright &copy; 2019
                    </Typography>
                </footer>
                {/* End footer */}
            </div>
        );
};
