import styles from './storm.module.css'

const Storm = () => {
    return(
        <div className={styles['thundery']}>
            <div className={styles['thundery-cloud']}></div>
            <div className={styles['thundery-rain']}></div>
        </div>
    )
}

export default Storm;