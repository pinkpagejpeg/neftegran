import React from 'react'
import classes from './Catalog.module.scss'

const Catalog = () => {
    return ( 
        <div className={classes.catalog__wrapper}>
            <h2 className={classes.section_title}>Продукты и услуги</h2>
            {/* <OffersServices />
            <OffersProducts /> */}
        </div>
     );
}
 
export default Catalog;