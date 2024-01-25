import React from 'react'
import classes from './Catalog.module.scss'
import CatalogProducts from './components/catalogProducts/CatalogProducts';
import CatalogServices from './components/catalogServices/CatalogServices';

const Catalog = () => {
    return ( 
        <div className={classes.catalog__wrapper}>
            <h2 className={classes.section_title}>Продукты и услуги</h2>
            <CatalogServices />
            <CatalogProducts />
        </div>
     );
}
 
export default Catalog;