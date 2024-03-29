import React from 'react'
import classes from './CatalogServices.module.scss'
import ServicesCard from "../../../UI/cards/servicesCard/ServicesCard";
import service from '../../../../assets/images/services.png'

const CatalogServices = () => {
    return ( 
        <div className={classes.services__wrapper}>
            <h3 className={classes.subtitle}>Услуги</h3>
            <div className={classes.services__cards}>
                <ServicesCard service={{
                    image: service,
                    title: 'Услуга №1',
                    info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                }}/>
                <ServicesCard service={{
                    image: service,
                    title: 'Услуга №1',
                    info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                }}/>
                <ServicesCard service={{
                    image: service,
                    title: 'Услуга №1',
                    info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                }}/>
                <ServicesCard service={{
                    image: service,
                    title: 'Услуга №1',
                    info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                }}/>
                <ServicesCard service={{
                    image: service,
                    title: 'Услуга №1',
                    info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                }}/>
            </div>

        </div>
     );
}
 
export default CatalogServices;