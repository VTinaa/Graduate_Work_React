import classNames from 'classnames';

import styles from './moon.module.css'


const Moon = (topPosition) => {
    // const sunClassName = classNames(
    //     styles['moon'],
    //     {
    //         [styles['small-top']] : topPosition,
    //         // [styles['small-width']] : topPosition
    //     }
    // );
    // использовать sunClassName
    return (
        <div className={styles['moon']}></div>
    )
}

export default Moon;