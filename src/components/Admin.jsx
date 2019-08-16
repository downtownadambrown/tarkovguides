import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { getUsers } from '../models/Users/actions';
import { getAmmo } from '../models/Ammo/actions';
import { getGuns } from '../models/Guns/actions';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  hero: {
    margin: theme.spacing(2),
  },
}));

const Admin = (props) => {
  const { dispatch } = props;
  const classes = useStyles();

  const [view, setView] = useState('Users');
  //const [data, setData] = useState([]);

  useEffect( () => {
    switch(view) {
        case "Users":
            dispatch(getUsers());
            break;
        case "Ammo":
            dispatch(getAmmo());
            break;
        case "Guns":
            dispatch(getGuns());
            break;
        default:
            break;
    }
  }, [view, dispatch]);

  return (
    <div>
      <div className={classes.hero}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {`Admin Panel: ${view}`}
          </Typography>
        </Container>
      </div>
      <Container maxWidth="md">
        <Button onClick={() => setView('Users')}>
            Users
        </Button>
        <Button onClick={() => setView('Ammo')}>
            Ammo
        </Button>
        <Button onClick={() => setView('Guns')}>
            Guns
        </Button>
      </Container>
    </div>
  );
};

export default connect()(Admin);
