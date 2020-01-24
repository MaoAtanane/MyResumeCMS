import React from 'react';
import { styles } from './Main-styles'
import About from '../../components/About'
import Intro from '../../components/Intro'
import Menu from '../../components/Menu'
const MainPage = () => {


  return (
    <div style={styles.body}>
      
      <div style={{ top: 0, position: 'sticky' }}>
        <Menu />
      </div>

      <div style={styles.leftBar}>
      </div>

      <div style={styles.midlePart}>
        <Intro id='intro' />
        <About id='about' />
      </div>

      <div style={styles.rightBar}>
      </div>

    </div >
  );
}

export default MainPage;
