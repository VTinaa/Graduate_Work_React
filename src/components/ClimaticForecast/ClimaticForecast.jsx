import styles from './climaticForecast.module.css'

import PageWrapper from '../PageWrapper/PageWrapper';

const ClimaticForecast = () => {
    return (
        <PageWrapper>

            <div className={styles['common']}>
                <h2>Climatic Forecast 30 days</h2>

                <h1 className={styles['underway']}>UNDERWAY DEVELOPER...</h1>

            </div>
            
        </PageWrapper>
    )
}

export default ClimaticForecast;