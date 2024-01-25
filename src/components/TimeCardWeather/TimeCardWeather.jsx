import PartlyCloudy from '../AnimatedIcon/PartlyCloudy/PartlyCloudy';
import styles from './timeCardWeather.module.css'
import Storm from '../AnimatedIcon/Storm/Storm';

const TimeCardWeather = (props) => {
    const { temp_max, temp_min, feels_like } = props;
    return(
        <div className={styles['common__row']}>
            {/*  Now || 11am */}
            <h3 className={styles['time__title']}>11am </h3>
            {/* <Storm /> */}

            <PartlyCloudy smallTopPadding />
            
            <div className={styles['temp_max']}>
                <p>{temp_max ? `${temp_max}°` : `30°`}</p>
                <p>{temp_min ? `${temp_min}°` : `28°`}</p>
            </div>
            <p className={styles['real-fell__center']}>
                <h3>Real Fell</h3>
                {feels_like ? `${feels_like}°` : `25°`}
            </p>
        </div>
    )
}

export default TimeCardWeather;