import React from 'react';

import classes from './MenuButton.css'

const menuButton = (props) => {
  return (  
    <div 
        onClick={props.click}
        className={classes.MenuButton}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default menuButton;