import React from 'react';

import { useNavigate } from 'react-router-dom';

import fire from '../services/firebase'

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
  const navigate = useNavigate();
  const handleLogout = () =>{
    fire.auth().signOut().then(() => {
      console.log('deu certo')
      navigate('/');
    }).catch((error) => {
      console.log('deu ruim', error)
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>   
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
