import React from 'react'
import classes from './Offers.module.scss'
import OffersServices from './components/offersServices/OffersServices';
import OffersProducts from './components/offersProducts/OffersProducts';

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