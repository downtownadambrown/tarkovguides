import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: theme.spacing(2),
    },
}));

export default function HomeContent() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles();

    return (
        <div>
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
        </div>
    );
}