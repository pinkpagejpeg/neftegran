import React from 'react'
import classes from './CatalogProducts.module.scss'
import ProductsCard from '../../../UI/cards/productsCard/ProductsCard';
import products from '../../../../assets/images/products.png'

const CatalogProducts = () => {
    return (
        <div className={classes.products__wrapper}>
            <h3 className={classes.subtitle}>Продукты</h3>
            <div className={classes.products__cards}>
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
    );
}

export default CatalogProducts;