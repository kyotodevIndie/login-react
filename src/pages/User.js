import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
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
            subheader="Front End Developer"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Email
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Bio
            </Typography>

        </CardContent>
        <CardActions disableSpacing>
            <Typography variant="body2" color="textSecondary" component="p">
            More Informations
            </Typography>
            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Informations:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor
                erat vitae fringilla lacinia. Pellentesque ut erat ut massa mattis
                volutpat sit amet vitae risus. Praesent a imperdiet eros. Cras at
                consequat justo, imperdiet ultricies lacus. Mauris orci arcu, finibus
                eget ultricies accumsan, interdum quis nisl. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. In hac habitasse platea
                dictumst. Proin odio erat, malesuada finibus molestie nec, congue
                a ex. In eu dictum justo. Sed pellentesque magna vel felis laoreet
                , eget hendrerit risus molestie. Pellentesque vitae imperdiet elit,
                et tempor metus. Proin tristique leo ut scelerisque finibus.
                Donec non mi ultricies, volutpat tortor ut, dignissim lorem.
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
        </Container>
        <Footer />
    </>
  );
}