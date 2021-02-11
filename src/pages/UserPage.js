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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState('');



  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleEdit = (name, avatar) => {
    user.updateProfile({
      displayName: {name},
      photoURL: {avatar},
    }).then(function() {
      console.log('Update successful!')
    }).catch(function(error) {
      console.log('deu ruim berg', error)
    });
    setOpen(false);
  }
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }

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
              <IconButton aria-label="settings" aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuOpen}>
                  <MoreVertIcon />
              </IconButton>
              }
              title={name}
              subheader="Title"
          />
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Email: {user.email}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Bio: Add your biography here!  
              </Typography>
          </CardContent>
          </Card>
          </Container>
          <Footer />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Edit your Profile</MenuItem>
          </Menu>
          <Dialog open={open} onClose={handleModalClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit your Profile</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              value={name} onChange={e=> setName(e.target.value)}
            />
            <br />
            <TextField
              variant="outlined"
              margin="dense"
              id="avatar"
              label="Your Avatar Url"
              type="text"
              value={avatar} onChange={e=> setAvatar(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEdit} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        </>
        ) :
          (
            <h1>you're not Logged</h1>
          )}
        
    </>
  );
}