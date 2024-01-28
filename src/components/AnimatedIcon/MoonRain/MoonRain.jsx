import classNames from 'classnames';

import styles from './moonRain.module.css'

const MoonRain = ({ smallTopPadding }) => {
    const sunClassName = classNames(
        styles['partly-cloudy-moon'],
        {
            [styles['small-padding']] : smallTopPadding,
            [styles['small-width']] : smallTopPadding
        }
    );

    const cloudClassName = classNames(
        styles['moon-partly-cloudy-cloud'],
        {
            [styles['small-top']] : smallTopPadding,
            [styles['small-width-cloud']] : smallTopPadding
        }
    )
    return (
        <div className={styles['partly-cloudy']}>
            <div className={sunClassName}></div>
            <div className={cloudClassName}></div>
            <div className={styles['rainy-rain']}></div>
        </div>
    )
}

export default MoonRain;
