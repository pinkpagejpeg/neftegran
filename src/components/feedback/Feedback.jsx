import React from 'react'
import classes from './Feedback.module.scss'
import feedback from '../../assets/images/feedback.jpg'
import FeedbackForm from './components/feedbackForm/FeedbackForm';

const Feedback = () => {
    return ( 
        <div className={classes.feedback__wrapper}>
            <h2 className={classes.section_title}>Остались вопросы?</h2>
            <div className={classes.feedback__mainbox}>
                <FeedbackForm />
                <div className={classes.feedback__imagebox}>
                    <img className={classes.feedback__image} src={feedback} />
                </div>
            </div>
        </div>
     );
}
 
export default Feedback;