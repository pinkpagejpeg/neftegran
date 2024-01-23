import React from 'react'
import classes from './ProsCard.module.scss'

const ProsCard = ({pros}) => {
    return ( 
        <div className={classes.pros_card__wrapper}>
            <img className={classes.pros_card__icon} src={pros.icon}/>
            <h4 className={classes.card_title}>Цель №{pros.id}</h4>
            <p className={classes.main_text}>Предварительные выводы неутешительны:
                синтетическое тестирование предполагает независимые способы реализации
                поставленных обществом задач.</p>
        </div>
     );
}
 
export default ProsCard;