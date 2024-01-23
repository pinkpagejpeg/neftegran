import React from 'react'
import classes from './MainButton.module.scss'

const MainButton = ({ children, ...props }) => {
    return ( 
        <button className={classes.main_button} {...props}>{children}</button>
     );
}
 
export default MainButton;