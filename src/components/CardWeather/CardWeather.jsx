import styles from './cardWeather.module.css'

// Demo
import Sun from '../AnimatedIcon/Sun';
import Clouds from '../AnimatedIcon/Clouds/Clouds';
import Storm from '../AnimatedIcon/Storm/Storm';
import Rain from '../AnimatedIcon/Rain/Rain';
import PartlyCloudy from '../AnimatedIcon/PartlyCloudy/PartlyCloudy';
import Moon from '../AnimatedIcon/Moon/Moon';
import MoonPartyCloudy from '../AnimatedIcon/MoonPartyCloudy/MoonPartyCloudy';
import MoonRain from '../AnimatedIcon/MoonRain/MoonRain';
import SunRain from '../AnimatedIcon/SunRain/SunRain';
//

const CardWeather = (props) => {
    const { coord, temp, main, description, humidity, icon } = props;
    return (
        <div className={styles['common']}>
            {/* <h2>{ coord.lon || `City`}</h2> */}
            {/* <h2 className={styles['title']}>{coord ? `${coord.lon}, ${coord.lat}` : 'City'}</h2> */}
            <h2 className={styles['title']}>San Francisco</h2>
            <p className={styles['time-day-month']}>time/day. Month</p>

            <div className={styles['container__weather']}>
                <div className={styles['title-temp']}>
                    {/* <p>{ temp || `+8°` }</p> */}
                    {/* <div><Sun /></div> */}
                    {/* <div><Storm /></div> */}
                    {/* <Rain /> */}
                    {/* <MoonRain /> */}
                    {/* <SunRain /> */}
                    {/* <Clouds /> */}

                    {/* <Moon /> */}
                    {/* <MoonPartyCloudy /> */}

                    {/* { icon === 'Clouds' && <PartlyCloudy /> } */}
                    {<PartlyCloudy />}
                    {/* <p>{temp ? `${temp}°C` : '+8°'}</p> */}
                    <p className={styles['p-temp']}>{'24°'}</p>

                </div>
                <div>
                    <p className={styles['title-main']}> {main} </p>
                    <p className={styles['title-humiditi']}>{humidity} %</p>
                    <p className={styles['title-desc']}> {description} </p>

                </div>
            </div>

        </div>
    )
}

export default CardWeather;