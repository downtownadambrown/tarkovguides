import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import { connect } from "react-redux";
import { getTableData } from "../models/Admin/actions";
import ReactTable from 'react-table';
import tableColumns from './Admin/tableColumns';

const useStyles = makeStyles((theme) => ({
    hero: {
        margin: theme.spacing(2),
    },
}));

const mapState = (state) => {
    return ({
        usersData: state.users.get('data'),
        ammoData: state.ammo.get('data'),
        gunsData: state.ammo.get('data')
    });
};

const Admin = (props) => {
  const { dispatch } = props;
  const classes = useStyles();

  const [view, setView] = useState('Users');
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [columns, setColumns] = useState(tableColumns(view));

  const tableData = useSelector(state => state.admin.get('tableData'));

  useEffect( () => {
      dispatch(getTableData(view));
      setColumns(tableColumns(view));
  }, [view, dispatch]);

  useEffect(() => {
      setData(tableData);
  }, [tableData]);

  console.log("data: ", data);
  console.log("columns: ", columns);

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
        {data && columns && (
            <ReactTable
                columns={columns}
                data={data}
/*                sorted={sorted}
                onSortedChange={sorted => setSorted(sorted)}*/
                defaultPageSize={10}
                minRows={10}
            />
        )}
    </div>
  );
};

export default connect(mapState)(Admin);
