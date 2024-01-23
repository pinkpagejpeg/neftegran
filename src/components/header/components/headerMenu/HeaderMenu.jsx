import React from 'react'
import classes from './HeaderMenu.module.scss'
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return ( 
        <nav className={classes.header__nav}>
            <ul className={classes.header__menu}>
                <li className={classes.header__menu_item}>
                    <NavLink to="/" className={classes.header__link}>Главная</NavLink>
                </li>
                <li className={classes.header__menu_item}>
                    <NavLink to="/About" className={classes.header__link}>О компании</NavLink>
                </li>
                <li className={classes.header__menu_item}>
                    <NavLink to="/ProductsServices" className={classes.header__link}>Продукты и услуги</NavLink>
                </li>
                <li className={classes.header__menu_item}>
                    <NavLink to="/Contacts" className={classes.header__link}>Контакты</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default HeaderMenu;