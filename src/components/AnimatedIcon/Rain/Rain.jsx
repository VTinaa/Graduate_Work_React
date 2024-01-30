import classNames from 'classnames';

import styles from './rain.module.css'


const Rain = ( smallTopPaddingRain ) => {

    const rainyClassName = classNames(
        styles['rainy-cloud'],
        {
            [styles['small-padding']] : smallTopPaddingRain,
            [styles['small-width']] : smallTopPaddingRain
        }
    );
    
    const cloudClassName = classNames(
        styles['rainy-rain'],
        {
            [styles['small-width-rain']] : smallTopPaddingRain,
            [styles['small-padding']] : smallTopPaddingRain
        }
    )

    const topClassName = classNames(
        styles['rainy'],
        {
            [styles['small-top']] : smallTopPaddingRain
        }
    )

    return(
        <div className={topClassName}>
            <div className={rainyClassName}></div>
            <div className={cloudClassName}></div>
        </div>
    )
}

export default Rain;