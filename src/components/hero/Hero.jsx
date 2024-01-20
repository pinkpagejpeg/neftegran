import React from 'react'
import classes from './Hero.module.scss'
import barrel from './../../assets/images/barrel.png'
import scroll from './../../assets/images/scroll.svg'

const Hero = () => {
    return ( 
        <div className={classes.hero__wrapper}>
            <img className={classes.hero__image} src={barrel} alt='hero image' />
            <div className={classes.hero__infobox}>
                <h1 className={classes.hero__title}>Энергия. Сила. <span>Нефтегрань.</span></h1>
                <p className={classes.hero__text}>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: существующая теория создаёт предпосылки для существующих финансовых и административных условий.</p>
            </div>
            <img className={classes.hero__scroll} src={scroll} alt='scroll' />
        </div>
     );
}
 
export default Hero;