import React from 'react';
import {styles} from './Intro-styles'
import MainButton from '../../commons/MainButton'
const About = (props) => {
  return (
    <div id={props.id} style={styles.body}>
        <p style={styles.hello}>Hello, my name is</p>
        <h1 style={styles.name}>Abdel Maoula ATANANE</h1>
        <h2 style={styles.profession}> I am a fullstack software engenieer</h2>
        <p style={styles.description}>I'm a software engineer based in Paris, France specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
        <MainButton a={{href:'mailto:abdel.maoula.atanane@gmail.com'}}> Get in touch </MainButton>
    </div>
  );
}

export default About;
