import React from 'react'
import classes from './Employee.module.scss'
import EmployeeCard from './components/employeeCard/EmployeeCard';
import orlov_artemii from '../../assets/images/orlov_artemii.jpg'
import lubimova_margarita from '../../assets/images/lubimova_margarita.jpg'
import voronov_ivan from '../../assets/images/voronov_ivan.jpg'
import tolstokozhev_vyacheslav from '../../assets/images/tolstokozhev_vyacheslav.jpg'
import kuznetsova_anna from '../../assets/images/kuznetsova_anna.jpg'
import mayorova_vasilisa from '../../assets/images/mayorova_vasilisa.jpg'

const Employee = () => {
    return (
        <div className={classes.employee__wrapper}>
            <h2 className={classes.section_title}>Наши сотрудники</h2>
            <div className={classes.employee__cards}>
                <EmployeeCard employee={{
                    image: orlov_artemii,
                    name: 'Артемий Орлов',
                    post: 'Должность',
                }} />
                <EmployeeCard employee={{
                    image: lubimova_margarita,
                    name: 'Маргарита Любимова',
                    post: 'Должность',
                }} />
                <EmployeeCard employee={{
                    image: voronov_ivan,
                    name: 'Иван Воронов',
                    post: 'Должность',
                }} />
                <EmployeeCard employee={{
                    image: tolstokozhev_vyacheslav,
                    name: 'Вячеслав Толстокожев',
                    post: 'Должность',
                }} />
                <EmployeeCard employee={{
                    image: kuznetsova_anna,
                    name: 'Анна Кузнецова',
                    post: 'Должность',
                }} />
                <EmployeeCard employee={{
                    image: mayorova_vasilisa,
                    name: 'Василиса Майорова',
                    post: 'Должность',
                }} />
            </div>
        </div>
    );
}

export default Employee;