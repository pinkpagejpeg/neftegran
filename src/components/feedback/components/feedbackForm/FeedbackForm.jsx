import React from 'react'
import classes from './FeedbackForm.module.scss'

const FeedbackForm = () => {
    return (
        <div className={classes.feedback__wrapper}>
            <h3 className={classes.subtitle}>Форма обратной связи</h3>
            <form className={classes.feedback__form}>
                <input type="text" className={classes.form_input} placeholder="Имя" required />
                <input type="tel" className={classes.form_input} placeholder="Телефон" required />
                <input type="email" className={classes.form_input} placeholder="Электронная почта" required />
                <textarea className={classes.form_input} placeholder="Сообщение" required/>
                <p className={classes.main_text}>Отправляя форму вы соглашаетесь с правилами сайта</p>
                <input type="submit" className={classes.form_submit} value="Отправить" />
            </form>
        </div>
    );
}

export default FeedbackForm;