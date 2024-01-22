import styles from './partlyCloudy.module.css'

const PartlyCloudy = () => {
    return (
        <div className={styles['partly-cloudy']}>
            <div className={styles['partly-cloudy-sun']}></div>
            <div className={styles['partly-cloudy-cloud']}></div>
        </div>
    )
}

export default PartlyCloudy;