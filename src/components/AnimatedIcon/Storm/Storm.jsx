import classNames from 'classnames';

import styles from './storm.module.css'

const Storm = (topPosition) => {

    // const stormClassName = classNames(
    //     styles['partly-cloudy-sun'],
    //     {
    //         [styles['small-padding']] : topPosition,
    //         [styles['small-width']] : topPosition
    //     }
    // );

    // использовать stormClassName
    return(
        <div className={styles['thundery']}>
            <div className={styles['thundery-cloud']}></div>
            <div className={styles['thundery-rain']}></div>
        </div>
    )
}

export default Storm;