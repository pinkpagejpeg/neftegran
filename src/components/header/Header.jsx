import React from 'react'
import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import HeaderMenu from './components/headerMenu/HeaderMenu';
import HeaderSearch from './components/headerSearch/HeaderSearch';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.header__wrapper}>
            <NavLink to="/" className={classes.header__link}>
                <img className={classes.header__logo} src={logo} alt="logo" />
            </NavLink>
            <div className={classes.header__menu}>
                <HeaderMenu />
                <HeaderSearch />
            </div>
        </header>
    );
}

export default Header;