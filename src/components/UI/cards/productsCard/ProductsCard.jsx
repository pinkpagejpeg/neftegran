import React from 'react'
import classes from './ProductsCard.module.scss'
import MainButton from '../../buttons/mainButton/MainButton';

const ProductsCard = (props) => {
    return ( 
        <div className={classes.products_card__wrapper}>
            <img className={classes.products_card__image} src={props.product.image}/>
            <h4 className={classes.card_title}>{props.product.title}</h4>
            <p className={classes.main_text}>{props.product.info}</p>
            <span className={classes.products_card__price}>{props.product.price} руб.</span>
            <MainButton>Заказать</MainButton>
        </div>
     );
}
 
export default ProductsCard;