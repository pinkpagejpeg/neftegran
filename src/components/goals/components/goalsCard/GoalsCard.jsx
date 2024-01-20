import React from 'react'
import classes from './GoalsCard.module.scss'

const GoalsCard = ({ goal }) => {
    return (
        <div className={classes.goals_card__wrapper}>
            <div className={classes.goals_card__numberbox}>
                <span className={classes.goals_card__number}>{goal.id}</span>
            </div>
            <h4 className={classes.card_title}>Цель №{goal.id}</h4>
            <p className={classes.main_text}>Предварительные выводы неутешительны:
                синтетическое тестирование предполагает независимые способы реализации
                поставленных обществом задач.</p>
        </div>
    );
}

export default GoalsCard;