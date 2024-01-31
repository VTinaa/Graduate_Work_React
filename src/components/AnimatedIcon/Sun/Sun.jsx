import classNames from 'classnames';

import styles from './sun.module.css'


const Sun = ({suntopPosition}) => {
    const sunClassName = classNames(
        styles['sunny'],
        {
            [styles['small-top']] : suntopPosition,
            [styles['small-width']] : suntopPosition
        }
    );
    // использовать sunClassName
    return (
        <div className={sunClassName}></div>
    )
}

export default Sun;