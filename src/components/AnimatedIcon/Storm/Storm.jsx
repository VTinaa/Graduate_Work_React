import classNames from 'classnames';

import styles from './storm.module.css'

const Storm = ({stormTopPosition}) => {

    const stormClassName = classNames(
        styles['thundery'],
        {
            [styles['small-padding']] : stormTopPosition
        }
    )

    // использовать stormClassName
    return(
        <div className={stormClassName}>
            <div className={styles['thundery-cloud']}></div>
            <div className={styles['thundery-rain']}></div>
        </div>
    )
}

export default Storm;