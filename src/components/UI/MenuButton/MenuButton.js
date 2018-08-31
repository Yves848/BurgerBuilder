import React from 'react';

import classes from './MenuButton.css'

const menuButton = (props) => {
  return (  
    <div 
        onClick={props.click}
        className={classes.MenuButton}>
      MENU
    </div>
  );
}

export default menuButton;