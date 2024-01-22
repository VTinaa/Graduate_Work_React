import styles from './rain.module.css'

const Rain = () => {
    return(
        <div className={styles['rainy']}>
            <div className={styles['rainy-cloud']}></div>
            <div className={styles['rainy-rain']}></div>
        </div>
    )
}

export default Rain;