import React from 'react'
import classes from './Goals.module.scss'
import GoalsCard from './components/goalsCard/GoalsCard';

const Goals = () => {
    return (
        <div className={classes.goals__wrapper}>
            <h2 className={classes.section_title}>Цели</h2>
            <div className={classes.goals__cards}>
                <GoalsCard goal={{
                    id: 1
                }} />
                <GoalsCard goal={{
                    id: 2
                }} />
                <GoalsCard goal={{
                    id: 3
                }} />
            </div>
        </div>
    );
}

export default Goals;