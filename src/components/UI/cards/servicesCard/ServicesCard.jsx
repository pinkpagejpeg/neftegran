import React, { useState } from 'react'
import classes from './ServicesCard.module.scss'
import MainButton from '../../buttons/mainButton/MainButton';
import OrderModal from '../../modals/ordeModal/OrderModal';

const ServicesCard = (props) => {
    const [orderModalVisible, setOrderModalVisible] = useState(false)
    return (
        <>
            <div className={classes.services_card__wrapper}>
                <img className={classes.services_card__image} src={props.service.image} />
                <h4 className={classes.card_title}>{props.service.title}</h4>
                <p className={classes.main_text}>{props.service.info}</p>
                <MainButton onClick={() => setOrderModalVisible(true)}>Заказать</MainButton>
            </div>
            <OrderModal visible={orderModalVisible} setVisible={setOrderModalVisible} />
        </>
    );
}

export default ServicesCard;