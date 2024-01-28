import styles from './detailedCardWeather.module.css'

const DetailedCardWeather = (props) => {
    const { name, id, day, night, humidity, description, gust, rain, icon } = props;
    return (
        <div className={styles['common']}>
            <h3>{name}</h3>
            <p>{icon}</p>
            <p>{day}..{night}</p>
            <p>{humidity}</p>
            <p>{description}</p>
            <p>{gust}</p>
            <p>{rain}</p>
        </div>
    )
}

export default DetailedCardWeather;