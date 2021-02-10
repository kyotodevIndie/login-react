import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
appBar:{
      backgroundColor: '#9400d3',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>   
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <Button color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
