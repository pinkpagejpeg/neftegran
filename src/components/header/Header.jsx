import React from 'react'
import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import HeaderMenu from './components/headerMenu/HeaderMenu';
import HeaderSearch from './components/headerSearch/HeaderSearch';

const Header = () => {
    return (
        <header className={classes.header__wrapper}>
            <img className={classes.header__logo} src={logo} alt="logo" />
            <div className={classes.header__menu}>
                <HeaderMenu />
                <HeaderSearch />
            </div>
        </header>
    );
}

export default Header;