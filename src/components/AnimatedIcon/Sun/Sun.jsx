import classNames from 'classnames';

import styles from './sun.module.css'


const Sun = (topPosition) => {
    const sunClassName = classNames(
        styles['sunny'],
        {
            [styles['small-top']] : topPosition,
            [styles['small-width']] : topPosition
        }
    );
    // использовать sunClassName
    return (
        <div className={sunClassName}></div>
    )
}

export default Sun;