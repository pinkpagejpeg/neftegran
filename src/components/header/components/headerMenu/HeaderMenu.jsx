import React from 'react'
import classes from './HeaderMenu.module.scss'

const HeaderMenu = () => {
    return ( 
        <nav className={classes.header__nav}>
            <ul className={classes.header__menu}>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#">Главная</a>
                </li>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#">О компании</a>
                </li>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#">Продукты и услуги</a>
                </li>
                <li className={classes.header__menu_item}>
                    <a className={classes.header__link} href="#">Контакты</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default HeaderMenu;