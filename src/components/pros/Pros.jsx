import React from 'react'
import classes from './Pros.module.scss'
import ProsCard from './components/prosCard/ProsCard';
import pros1 from '../../assets/images/pros1.svg'
import pros2 from '../../assets/images/pros2.svg'
import pros3 from '../../assets/images/pros3.svg'
import pros4 from '../../assets/images/pros4.svg'
import pros5 from '../../assets/images/pros5.svg'

const Pros = () => {
    return (
        <div className={classes.pros__wrapper}>
            <h2 className={classes.section_title}>Преимущества</h2>
            <div className={classes.pros__cards}>
                <ProsCard pros={{
                    id: 1,
                    icon: pros1,
                }} />
                <ProsCard pros={{
                    id: 2,
                    icon: pros2,
                }} />
                <ProsCard pros={{
                    id: 3,
                    icon: pros3,
                }} />
                <ProsCard pros={{
                    id: 4,
                    icon: pros4,
                }} />
                <ProsCard pros={{
                    id: 5,
                    icon: pros5,
                }} />
            </div>

        </div>
    );
}

export default Pros;