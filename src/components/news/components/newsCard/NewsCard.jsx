import React from 'react'
import classes from './NewsCard.module.scss'
import MainButton from '../../../UI/buttons/mainButton/MainButton';

const NewsCard = (props) => {
    return ( 
        <div className={classes.news_card__wrapper}>
            <h4 className={classes.card_title}>{props.news.title}</h4>
            <p className={classes.main_text}>{props.news.text}</p>
            <MainButton>Читать</MainButton>
        </div>
     );
}
 
export default NewsCard;