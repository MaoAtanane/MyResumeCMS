import React from 'react';
import {styles} from './Menu-styles'
import logo from '../../assets/pictures/logo.png'
import MainButton from '../../commons/MainButton'

const Menu = () => {
  return (
    <div style={styles.body}>
      <div style={styles.logoBlock}>
        <img style={styles.img} src={logo}/>
      </div>
      <div style={styles.menuBlock}>
        <a href='#about2' style={styles.menuItem}> 
          <p style={styles.menuNumber}>01.</p>
          <p style={styles.menuText}>About</p>
        </a>

        <a href='#experience' style={styles.menuItem}> 
          <p style={styles.menuNumber}>02.</p>
          <p style={styles.menuText}>Experience</p>
        </a>

        <a href='#work' style={styles.menuItem}> 
          <p style={styles.menuNumber}>02.</p>
          <p style={styles.menuText}>Work</p>
        </a>

        <a href='#contact' style={styles.menuItem}> 
          <p style={styles.menuNumber}>04.</p>
          <p style={styles.menuText}>Contact</p>
        </a>

        <div style={styles.menuItem}> 
          <MainButton a={{href:"/cv.pdf", target:"_blank"}} style={styles.resumeButton}> Resume </MainButton>
        </div>

      </div>
    </div>
  );
}

export default Menu;
