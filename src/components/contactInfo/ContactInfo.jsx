import React, { useState } from 'react'
import classes from './ContactInfo.module.scss'
import ContactInfoCard from './components/contactInfoCard/ContactInfoCard';
import kirov_icon from '../../assets/images/krv.png'
import moscow_icon from '../../assets/images/msk.png'
import spb_icon from '../../assets/images/spb.png'

const ContactInfo = () => {
    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        let newOffset = offset - 1228;
        if (newOffset < 0) newOffset = 3683;
        setOffset(newOffset);
    }

    const goNext = () => {
        let newOffset = offset + 1228;
        if (newOffset > 3683) newOffset = 0;
        setOffset(newOffset);
    }
    return (
        <div className={classes.contacts__wrapper}>
            <h2 className={classes.section_title}>Контакты</h2>
            <div className={classes.contacts__slaider}>
                <div className={classes.contacts__slaider_main}>
                    <a className={classes.contacts__buttons} onClick={goPrev}>
                        <svg className={classes.contacts__icon} xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42" fill="none">
                            <path d="M28 1C28 15.7059 12 20.7874 12 20.7874C12 20.7874 28 23.5973 28 40" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 1C21 15.6479 0.999999 21.0939 0.999999 21.0939C0.999999 21.0939 21 24.662 21 41" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <div className={classes.contacts__mainbox}>
                        <div className={classes.contacts__line} style={{ left: -offset + "px" }}>
                            <ContactInfoCard contacts={{
                                image: kirov_icon,
                                city: 'Киров',
                                email: 'neftegran_kirov@mail.ru',
                                telephone: '+7-922-965-7878',
                                addres: 'ул. Риммы Юровской, д. 4, офис 31',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: spb_icon,
                                city: 'Санкт-Петербург',
                                email: 'neftegran_spb@mail.ru',
                                telephone: '+7-812-108-3691',
                                addres: 'ул. Боровая, д. 32, офис 28',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: moscow_icon,
                                city: 'Москва',
                                email: 'neftegran_moscow@mail.ru',
                                telephone: '+7-495-888-7581',
                                addres: 'ул. Нежинская, д. 7, офис 83',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: kirov_icon,
                                city: 'Киров',
                                email: 'neftegran_kirov@mail.ru',
                                telephone: '+7-922-965-7878',
                                addres: 'ул. Риммы Юровской, д. 4, офис 31',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: spb_icon,
                                city: 'Санкт-Петербург',
                                email: 'neftegran_spb@mail.ru',
                                telephone: '+7-812-108-3691',
                                addres: 'ул. Боровая, д. 32, офис 28',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: moscow_icon,
                                city: 'Москва',
                                email: 'neftegran_moscow@mail.ru',
                                telephone: '+7-495-888-7581',
                                addres: 'ул. Нежинская, д. 7, офис 83',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: kirov_icon,
                                city: 'Киров',
                                email: 'neftegran_kirov@mail.ru',
                                telephone: '+7-922-965-7878',
                                addres: 'ул. Риммы Юровской, д. 4, офис 31',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: spb_icon,
                                city: 'Санкт-Петербург',
                                email: 'neftegran_spb@mail.ru',
                                telephone: '+7-812-108-3691',
                                addres: 'ул. Боровая, д. 32, офис 28',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                            <ContactInfoCard contacts={{
                                image: moscow_icon,
                                city: 'Москва',
                                email: 'neftegran_moscow@mail.ru',
                                telephone: '+7-495-888-7581',
                                addres: 'ул. Нежинская, д. 7, офис 83',
                                hours: 'Пн - Пт 11:00 - 17:00',
                            }}/>
                        </div>
                    </div>

                    <a className={classes.contacts__buttons} onClick={goNext}>
                        <svg className={classes.contacts__icon} xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42" fill="none">
                            <path d="M1 41C0.999999 26.2941 17 21.2126 17 21.2126C17 21.2126 0.999999 18.4027 0.999998 2" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 41C8 26.3521 28 20.9061 28 20.9061C28 20.9061 8 17.338 8 1" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div className={classes.contacts__slaider_nav}>
                    <a className={classes.contacts__slaider_nav_btn}></a>
                    <a className={classes.contacts__slaider_nav_btn}></a>
                    <a className={classes.contacts__slaider_nav_btn}></a>
                </div>
            </div>

        </div>
    );
}

export default ContactInfo;