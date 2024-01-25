import React, { useState } from 'react'
import classes from './OffersServices.module.scss'
import ServicesCard from '../../../UI/cards/servicesCard/ServicesCard';
import service from '../../../../assets/images/services.png'

const OffersServices = () => {
    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        let newOffset = offset - 1232;
        if (newOffset < 0) newOffset = 3684;
        setOffset(newOffset);
    }

    const goNext = () => {
        let newOffset = offset + 1232;
        if (newOffset > 3684) newOffset = 0;
        setOffset(newOffset);
    }
    return (
        <div className={classes.services__wrapper}>
            <h3 className={classes.subtitle}>Услуги</h3>
            <div className={classes.services__slaider}>
                <div className={classes.services__slaider_main}>
                    <a className={classes.services__buttons} onClick={goPrev}>
                        <svg className={classes.services__icon} xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42" fill="none">
                            <path d="M28 1C28 15.7059 12 20.7874 12 20.7874C12 20.7874 28 23.5973 28 40" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 1C21 15.6479 0.999999 21.0939 0.999999 21.0939C0.999999 21.0939 21 24.662 21 41" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <div className={classes.services__mainbox}>
                        <div className={classes.services__line} style={{ left: -offset + "px" }}>
                            <ServicesCard service={{
                                image: service,
                                title: 'Услуга №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                            }} />
                            <ServicesCard service={{
                                image: service,
                                title: 'Услуга №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                            }} />
                            <ServicesCard service={{
                                image: service,
                                title: 'Услуга №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                            }} />
                        </div>
                    </div>

                    <a className={classes.services__buttons} onClick={goNext}>
                        <svg className={classes.services__icon} xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42" fill="none">
                            <path d="M1 41C0.999999 26.2941 17 21.2126 17 21.2126C17 21.2126 0.999999 18.4027 0.999998 2" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 41C8 26.3521 28 20.9061 28 20.9061C28 20.9061 8 17.338 8 1" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div className={classes.services__slaider_nav}>
                    <a className={classes.services__slaider_nav_btn}></a>
                    <a className={classes.services__slaider_nav_btn}></a>
                    <a className={classes.services__slaider_nav_btn}></a>
                </div>
            </div>

        </div>
    );
}

export default OffersServices;