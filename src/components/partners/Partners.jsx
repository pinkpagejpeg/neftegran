import React from 'react'
import classes from './Partners.module.scss'
import partners_logo from '../../assets/images/partners_logo.svg'

const Partners = () => {
    return ( 
        <div className={classes.partners__wrapper}>
            <h2 className={classes.section_title}>Наши партнеры</h2>
            <div className={classes.partners__logos}>
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
                <img className={classes.partners__logo} src={partners_logo} />
            </div>
        </div>
     );
}
 
export default Partners;