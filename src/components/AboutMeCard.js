/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

import MeImage from '../images/mePic1.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 455,
    height: '40vw',
  },
});

export default function AboutMeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardMedia
        component="img"
        alt="Ryan Mendez"
        height="320"
        image={MeImage}
        title="Ryan Mendez"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Ryan Mendez
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          color="textSecondary"
          component="h1"
        >
          Full Stack Web Developer currently working with the MERN stack. I
          love developing immersive user-friendly applications.
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          color="textPrimary"
          align="center"
          component="h2"
        >
          Javascript | React | Redux | Node.js | Express | MongoDB | MySQL
        </Typography>
      </CardContent>

      <IconButton
        component={LinkedInIcon}
        align="left"
        fontSize="large"
        color="primary"
        onClick={() => window.open(
          'https://www.linkedin.com/in/ryan-mendez-24231874/',
          '_blank',
        )}
      />
      <IconButton
        component={GitHubIcon}
        align="center"
        fontSize="large"
        color="primary"
        onClick={() => window.open('http://github.com/rymen80', '_blank')}
      />
    </Card>
  );
}
