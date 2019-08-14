import React from 'react';
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: theme.spacing(2),
    },
}));

export default function MapsApp() {
    const classes = useStyles();
    const mapList = [
        "The Labs",
        "Factory",
        "Woods",
        "Customs",
        "Shoreline",
        "Interchange",
        "Suburbs",
        "Streets of Tarkov",
        "Town",
        "Lighthouse",
        "Terminal",
    ];

    return (
        <div>
            <div className={classes.hero}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Tarkov Maps
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Where you're going, you'll need a map
                    </Typography>
                </Container>
            </div>
            <Container maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {mapList.map((map, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {map}
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
            </Container>        </div>
    );
}