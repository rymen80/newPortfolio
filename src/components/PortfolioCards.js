/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import nightinImage from '../images/nightIn.png';
import issUseImage from '../images/issUse.png';
import ironDojoImage from '../images/ironDojo.png';

import BgImage from '../images/keyboard.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 180,
  },
}));

const styles = {
  paperContainer: {
    height: '180vh',
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 'calc(100vw + 48px)',
    margin: -24,
    padding: 24,
  },
};

export default function PortfolioCard() {
  const classes = useStyles();

  return (
    <Paper style={styles.paperContainer}>
      <>
        <Container maxWidth="sm">
          <CssBaseline />
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={nightinImage}
                        title="NightIn App"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          night in
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          Simplify your night with night in.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href="https://tuanasaurus.github.io/groupProject1DinnerMovie/"
                      >
                        Check It Out
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        href="https://github.com/tuanasaurus/groupProject1DinnerMovie.git"
                      >
                        code
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={issUseImage}
                        title="Issues App"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          issUse
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          Issues"?! No Issues with issUse©
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href="https://iss-use.herokuapp.com/"
                      >
                        Check it out
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        href="https://github.com/rymen80/issueManager.git"
                      >
                        code
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={ironDojoImage}
                        title="ironDojo App"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Iron Dojo
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          Welcome to the Iron Dojo
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href="https://iron-dojo.herokuapp.com/"
                      >
                        Check it out
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        href="https://github.com/rpdurk/TheIronDojo-Mongo-.git"
                      >
                        code
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </>
    </Paper>
  );
}
