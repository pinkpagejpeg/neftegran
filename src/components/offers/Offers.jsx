import React from 'react'
import classes from './Offers.module.scss'
import OffersServices from './components/services/OffersServices';
import OffersProducts from './components/products/OffersProducts';

const Offers = () => {
    return ( 
        <div className={classes.offers__wrapper}>
            <h2 className={classes.section_title}>Предложения</h2>
            <OffersServices />
            <OffersProducts />
        </div>
     );
}
 
export default Offers;