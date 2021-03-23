/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  p: {
    marginLeft: 'auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Button component={Link} to="/" color="inherit">
              About
            </Button>
            <Button to="/Portfolio" component={Link} color="inherit">
              Portfolio
            </Button>
            <Button to="/Contact" component={Link} color="inherit">
              Contact
            </Button>
            <Button
              to="/Contact"
              onClick={() => window.open(
                'https://www.canva.com/design/DAEZIpNbA1U/3fu4uuWGH4AVe1dLV_U4Hw/view?utm_content=DAEZIpNbA1U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
                '_blank',
              )}
              color="inherit"
            >
              Resume
            </Button>
          </Box>
          <div>Ryan Mendez</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
