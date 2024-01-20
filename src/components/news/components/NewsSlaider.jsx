import React, { useState } from 'react'
import classes from './NewsSlaider.module.scss'
import NewsCard from './NewsCard';

const NewsSlaider = () => {
    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        let newOffset = offset - 466;
        if (newOffset < 0) newOffset = 942;
        setOffset(newOffset);
    }

    const goNext = () => {
        let newOffset = offset + 466;
        if (newOffset > 942) newOffset = 0;
        setOffset(newOffset);
    }
    return (
        <div className={classes.news__slaider}>
            <div className={classes.news__slaider_main}>
                <a className={classes.news__buttons} onClick={goPrev}>
                    <svg className={classes.news__icon} xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42" fill="none">
                        <path d="M28 1C28 15.7059 12 20.7874 12 20.7874C12 20.7874 28 23.5973 28 40" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 1C21 15.6479 0.999999 21.0939 0.999999 21.0939C0.999999 21.0939 21 24.662 21 41" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>

                <div className={classes.news__mainbox}>
                    <div className={classes.news__line} style={{ left: -offset + "px" }}>
                        <NewsCard news={{
                            title: 'Новость №1',
                            text: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                        }} />
                        <NewsCard news={{
                            title: 'Новость №1',
                            text: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                        }} />
                        <NewsCard news={{
                            title: 'Новость №1',
                            text: 'Предварительные выводы неутешительны: синтетическое тестирование предполагает независимые способы реализации поставленных обществом задач. Безусловно, начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик. ',
                        }} />
                    </div>
                </div>

                <a className={classes.news__buttons} onClick={goNext}>
                    <svg className={classes.news__icon} xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42" fill="none">
                        <path d="M1 41C0.999999 26.2941 17 21.2126 17 21.2126C17 21.2126 0.999999 18.4027 0.999998 2" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 41C8 26.3521 28 20.9061 28 20.9061C28 20.9061 8 17.338 8 1" stroke="#E3B573" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div className={classes.news__slaider_nav}>
                <a className={classes.news__slaider_nav_btn}></a>
                <a className={classes.news__slaider_nav_btn}></a>
                <a className={classes.news__slaider_nav_btn}></a>
            </div>
        </div>
    );
}

export default NewsSlaider;