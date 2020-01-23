import React from 'react';
import {styles} from './Menu-styles'
import logo from '../../assets/pictures/logo.png'
const Menu = () => {
  return (
    <div style={{}}>
      <div>
        <img style={styles.img} src={logo}/>
      </div>
      <div>
        <div>
          <p>01.</p>
          <p>test1</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
