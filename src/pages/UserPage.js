import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import fire from '../services/firebase'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import User from '../assets/user.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 25,
    marginLeft: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));
 
export default function UserPage() {
  const classes = useStyles();

  const user = fire.auth().currentUser;



  return (
      <>
       {user ? (
         <>
          <Nav />
          <Container component="main" maxWidth="xs">
          <CssBaseline /> 
          <Card className={classes.root}>
          <CardHeader
              avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                  <img src={User} alt="User" style={{width: 50}}/>
              </Avatar>
              }
              action={
              <IconButton aria-label="settings">
                  <MoreVertIcon />
              </IconButton>
              }
              title="Thallys Morais"
              subheader="Title"
          />
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Email:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Bio: Add your biography here!  
              </Typography>
  
          </CardContent>
          </Card>
          </Container>
          {console.log("user")}
          <Footer />
          </>
         ) :
          (
            <h1>you're not Logged</h1>
          )}
        
    </>
  );
}