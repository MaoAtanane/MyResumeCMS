import React from 'react';
import {styles} from './Main-styles'
import About from '../../components/About'
import Menu from '../../components/Menu'
const MainPage = () => {
  return (
    <div style={styles.body}>
        <Menu/>
        <About/>
    </div>
  );
}

export default MainPage;
