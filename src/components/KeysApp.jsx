import React from 'react';
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: theme.spacing(2),
    },
}));

export default function KeysApp() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.hero}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Tarkov Keys
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Gotta collect them all!
                    </Typography>
                </Container>
            </div>
            <Container maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>

                </Grid>
            </Container>
        </div>
    );
}