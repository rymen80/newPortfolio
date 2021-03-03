/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Snackbar,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
import { EmailRounded, GitHub, LinkedIn } from '@material-ui/icons';
import contactImage from '../images/contact.jpg';

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="outlined" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginTop: theme.spacing(10),
    backgroundColor: 'primary',
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(2),
  },
  btn: {
    margin: theme.spacing(1),
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#212121',
    },
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    paddingTop: theme.spacing(2),
  },

}));
const styles = {
  paperContainer: {
    height: '100vh',
    backgroundImage: `url(${contactImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 'calc(100vw + 48px)',
    margin: -24,
    padding: 24,
  },

};

export default function ContactInputs() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_smouyxr',
        'contact_form',
        e.target,
        'user_0ycvR35NbQTQRxxVJkr1A',
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById('user_name').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('message').value = '';
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }
  return (
    <Paper style={styles.paperContainer}>
      <Container className={classes.container}>
        <Paper>
          <Typography className={classes.title}>
            <h2>Contact Me</h2>
          </Typography>
          <Button
            href="https://www.linkedin.com/in/ryan-mendez-24231874/"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            className={classes.btn}
          >
            LinkedIn
            <LinkedIn className={classes.icon} />
          </Button>
          <Button
            href="http://github.com/rymen80"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            className={classes.btn}
          >
            GitHub
            <GitHub className={classes.icon} />
          </Button>
          <Button
            href="mailto: rjmendez80@gmail.com"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            className={classes.btn}
          >
            rjmendez80@gmail.com
            <EmailRounded className={classes.icon} />
          </Button>
          <Typography className={classes.title}>
            <h2>Send a message</h2>
          </Typography>
          <form className="contact-form" onSubmit={sendEmail}>
            <Container className={classes.messages}>
              <div>
                <TextField
                  className={classes.input}
                  id="user_name"
                  name="user_name"
                  label="Name"
                  variant="outlined"
                />

                <TextField
                  className={classes.input}
                  id="user_email"
                  name="user_email"
                  label="Email Address"
                  variant="outlined"
                />
              </div>

              <TextField
                className={classes.input}
                id="message"
                name="message"
                label="Message"
                multiline
                rows={8}
                variant="outlined"
              />
              <div>
                <Button
                  type="submit"
                  value="Send"
                  className={classes.btn}
                  variant="contained"
                >
                  Submit
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Email Sent!
                  </Alert>
                </Snackbar>
              </div>
            </Container>
          </form>
        </Paper>
      </Container>
    </Paper>
  );
}
