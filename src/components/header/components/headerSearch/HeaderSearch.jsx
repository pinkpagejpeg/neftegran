import React from 'react'
import classes from './HeaderSearch.module.scss'
import search from '../../../../assets/images/search.png'

const HeaderSearch = () => {
    return (
        <button className={classes.header__button}>
            <img className={classes.header__button_icon} src={search} alt="search" />
        </button>
    );
}

export default HeaderSearch;