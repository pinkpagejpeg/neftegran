import React from 'react'
import classes from './News.module.scss'
import news from '../../assets/images/news.jpg'
import NewsSlaider from './components/newsSlaider/NewsSlaider';

const News = () => {
    return (
        <div className={classes.news__wrapper}>
            <h2 className={classes.section_title}>Новости</h2>
            <div className={classes.news__mainbox}>
                <NewsSlaider />
                <div className={classes.news__imagebox}>
                    <img className={classes.news__image} src={news} />
                </div>
            </div>
        </div>
    );
}

export default News;