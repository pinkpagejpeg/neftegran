import React from 'react'
import classes from './EmployeeCard.module.scss'

const EmployeeCard = ({ employee }) => {
    return (
        <div className={classes.employee_card__wrapper}>
            <img className={classes.employee_card__image} src={employee.image} />
            <p className={classes.employee_card__name}>{employee.name}</p>
            <p className={classes.main_text}>{employee.post}</p>
        </div>
    );
}

export default EmployeeCard;