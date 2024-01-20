import React from 'react'
import classes from './OrderButton.module.scss'

const OrderButton = ({ children, ...props }) => {
    return ( 
        <button className={classes.order_button} {...props}>{children}</button>
     );
}
 
export default OrderButton;