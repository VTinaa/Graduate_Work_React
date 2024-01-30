import classNames from 'classnames';

import styles from './clouds.module.css'

const Clouds = ({ topPosition }) => {

    const cloudsClassName = classNames(
        styles['cloudy'],
        {
            [styles['small-top']] : topPosition,
            [styles['small-width']] : topPosition
        }
    )
// использовать cloudsClassName
    return (
        <div className={cloudsClassName}></div>
    )
}

export default Clouds;