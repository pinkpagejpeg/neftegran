import React, { useState } from 'react'
import classes from './ContactInfoCard.module.scss'
import MainButton from '../../../UI/buttons/mainButton/MainButton';

const ContactInfoCard = ({ contacts }) => {
    return (
        <div className={classes.contacts_card__wrapper}>
            <img className={classes.contacts_card__icon} src={contacts.image} />
            <h4 className={classes.card_title}>{contacts.city}</h4>
            <div className={classes.contacts_card__infobox}>
                <p className={classes.main_text}>{contacts.email}</p>
                <p className={classes.main_text}>{contacts.telephone}</p>
                <p className={classes.main_text}>{contacts.addres}</p>
                <p className={classes.main_text}>{contacts.hours}</p>
            </div>
            <MainButton>Смотреть на карте</MainButton>
        </div>
    );
}

export default ContactInfoCard;