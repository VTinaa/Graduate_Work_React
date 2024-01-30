import styles from './cardWeather.module.css'

// Animated Icon
import Sun from '../AnimatedIcon/Sun';
import Clouds from '../AnimatedIcon/Clouds/Clouds';
import Storm from '../AnimatedIcon/Storm/Storm';
import Rain from '../AnimatedIcon/Rain/Rain';
import PartlyCloudy from '../AnimatedIcon/PartlyCloudy/PartlyCloudy';
import Moon from '../AnimatedIcon/Moon/Moon';
import MoonPartyCloudy from '../AnimatedIcon/MoonPartyCloudy/MoonPartyCloudy';
import SunRain from '../AnimatedIcon/SunRain/SunRain';
//

const CardWeather = (props) => {
    const { cityName, weather, temp, main, description, cloudiness } = props;

    const getWeatherIcon = () => {
        const currentHour = new Date().getHours();

        if (weather >= 200 && weather <= 232) {
            return <Storm /> 
        } else if (weather > 232 && weather < 800) {
            return <Rain />
        } else if (weather == 800) {
            // return  currentHour >= 0 && currentHour < 12 ? <Sun /> : <Moon />
            return  currentHour >= 0 && currentHour < 12 ? <Moon /> : <Sun />
        } else if (weather > 800 && weather < 803) {
            // return currentHour >= 0 && currentHour < 12 ? <PartlyCloudy /> : <MoonPartyCloudy/>
            return currentHour >= 0 && currentHour < 12 ? <MoonPartyCloudy/> : <PartlyCloudy />
        } else if (weather == 803 || weather == 804) {
            return <Clouds />
        } else {
            return <SunRain />
        }
    }
    const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        return dd + '/' + mm + '/' + yyyy;;
    }
    return (
        <div className={styles['common']}>
            <h2 className={styles['title']}>{cityName}</h2>
            <p className={styles['time-day-month']}>{ getCurrentDate() }</p>

            <div className={styles['container__weather']}>
                <div className={styles['title-temp']}>
                    {getWeatherIcon()}
                    {/* <Storm /> */}
                    {/* <Sun /> */}
                    <p className={styles['p-temp']}>{temp}</p>
                </div>
                <div>
                    <p className={styles['title-main']}> {main} </p>
                    <p className={styles['title-humiditi']}><i class="fa-solid fa-cloud"></i> {cloudiness} %</p>
                    
                    <p className={styles['title-desc']}> {description} </p>

                </div>
            </div>

        </div>
    )
}

export default CardWeather;