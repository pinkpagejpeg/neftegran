import React from 'react'
import classes from './ServicesCard.module.scss'
import OrderButton from '../../buttons/orderButton/OrderButton';

const ServicesCard = (props) => {
    return ( 
        <div className={classes.services_card__wrapper}>
            <img className={classes.services_card__image} src={props.service.image}/>
            <h4 className={classes.card_title}>{props.service.title}</h4>
            <p className={classes.main_text}>{props.service.info}</p>
            <OrderButton >Заказать</OrderButton>
        </div>
     );
}
 
export default ServicesCard;