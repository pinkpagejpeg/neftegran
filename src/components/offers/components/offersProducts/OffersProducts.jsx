import React, { useState } from 'react'
import classes from './OffersProducts.module.scss'
import ProductsCard from '../../../UI/cards/productsCard/ProductsCard';
import products from '../../../../assets/images/products.png'

const OffersProducts = () => {
    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        let newOffset = offset - 1228;
        if (newOffset < 0) newOffset = 3683;
        setOffset(newOffset);
    }

    const goNext = () => {
        let newOffset = offset + 1228;
        if (newOffset > 3683) newOffset = 0;
        setOffset(newOffset);
    }
    return (
        <div className={classes.products__wrapper}>
            <h3 className={classes.subtitle}>Продукты</h3>
            <div className={classes.products__slaider}>
                <div className={classes.products__slaider_main}>
                    <a className={classes.products__buttons} onClick={goPrev}>
                        <svg className={classes.products__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 42" fill="none">
                            <path d="M28 1C28 15.7059 12 20.7874 12 20.7874C12 20.7874 28 23.5973 28 40" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 1C21 15.6479 0.999999 21.0939 0.999999 21.0939C0.999999 21.0939 21 24.662 21 41" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <div className={classes.products__mainbox}>
                        <div className={classes.products__line} style={{ left: -offset + "px" }}>
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            <ProductsCard product={{
                                image: products,
                                title: 'Продукт №1',
                                info: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач.',
                                price: 1000,
                            }} />
                            
                        </div>
                    </div>

                    <a className={classes.products__buttons} onClick={goNext}>
                        <svg className={classes.products__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 42" fill="none">
                            <path d="M1 41C0.999999 26.2941 17 21.2126 17 21.2126C17 21.2126 0.999999 18.4027 0.999998 2" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 41C8 26.3521 28 20.9061 28 20.9061C28 20.9061 8 17.338 8 1" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div className={classes.products__slaider_nav}>
                    <a className={classes.products__slaider_nav_btn}></a>
                    <a className={classes.products__slaider_nav_btn}></a>
                    <a className={classes.products__slaider_nav_btn}></a>
                </div>
            </div>
        </div>
    );
}

export default OffersProducts;