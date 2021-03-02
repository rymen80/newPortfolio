/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AboutMeCard from './AboutMeCard.js';
import Image from '../images/aboutMe.jpg';
import '../images/aboutMe.css';

const styles = {
  paperContainer: {
    height: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 'calc(100vw + 48px)',
    margin: -24,
    padding: 24,
    fontSize: '15px',
  },
};

export default function AboutMe() {
  return (
    <Paper style={styles.paperContainer}>
      <>
        <Container maxWidth="sm">
          <AboutMeCard />
        </Container>
      </>
    </Paper>
  );
}
