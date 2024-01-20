import React from 'react'
import classes from './NewsCard.module.scss'
import OrderButton from '../../UI/buttons/orderButton/OrderButton';

const NewsCard = (props) => {
    return ( 
        <div className={classes.news_card__wrapper}>
            <h4 className={classes.card_title}>{props.news.title}</h4>
            <p className={classes.main_text}>{props.news.text}</p>
            <OrderButton>Читать</OrderButton>
        </div>
     );
}
 
export default NewsCard;