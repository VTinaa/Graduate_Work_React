import styles from './timeCardWeather.module.css'

// Animated Icon
import Clouds from '../AnimatedIcon/Clouds/Clouds';
import PartlyCloudy from '../AnimatedIcon/PartlyCloudy/PartlyCloudy';
import Storm from '../AnimatedIcon/Storm/Storm';
import Sun from '../AnimatedIcon/Sun';
import SunRain from '../AnimatedIcon/SunRain/SunRain';
import Rain from '../AnimatedIcon/Rain/Rain';
// 

import Modal from '../Modal/Modal';

import { useState } from 'react';

const TimeCardWeather = (props) => {
    const { date, minTemp, maxTemp, cloudiness, weather, detailedTempData } = props;
    const [ showModal, setShowModal ] = useState(false);

    const onClose = () => {
        setShowModal(false);
    
    }
    const onShow = () => {
        setShowModal(true)
    }

    const getWeatherIcon = () => {
        if (weather >= 200 && weather <= 232) {
            return <Storm stormTopPosition /> 
        } else if (weather > 232 && weather < 800) {
            return <Rain smallTopPadding />
        } else if (weather == 800) {
            return <Sun suntopPosition />
        } else if (weather > 800 && weather < 803) {
            return <PartlyCloudy smallTopPadding />
        } else if (weather == 803 || weather == 804) {
            return <Clouds topPosition />
        } else {
            return <SunRain />
        }
    }

    const getStaticIcon = () => {

        if (weather >= 200 && weather <= 232) {
            return <i class="fa-solid fa-cloud-showers-heavy fa-2x"></i> 
        } else if (weather > 232 && weather < 800) {
            return <i class="fa-solid fa-cloud-rain fa-2x"></i>
        } else if (weather == 800) {
            return <i class="fa-solid fa-sun fa-2x"></i>
        } else if (weather > 800 && weather < 803) {
            return <i class="fa-solid fa-cloud-sun fa-2x"></i>
        } else if (weather == 803 || weather == 804) {
            return <i class="fa-solid fa-cloud fa-2x"></i>
        } else {
            return <i class="fa-solid fa-cloud-sun-rain fa-2x"></i>
        }
    }

    const getWeatherType = () => {
        if (weather >= 200 && weather <= 232) {
            return "bgc-storm"
        } else if (weather > 232 && weather < 800) {
            return "bgc-rain"
        } else if (weather == 800) {
            return "bgc-clear"
        } else if (weather > 800 && weather < 803) {
            return "bgc-partly-cloudy"
        } else if (weather == 803 || weather == 804) {
            return "bgc-cloud"
        } else {
            return ""
        }
    }

    return(
        <div className={styles['common__row']} onClick={onShow}>

            <h3 className={styles['time__title']}>{date}</h3>
            { 
                getWeatherIcon() 
            }
            <div className={styles['temp_max']}>
                <p>{minTemp}</p>
                <p>{maxTemp}</p>
            </div>
            <p className={styles['real-fell__center']}>
                <h3>Cloudiness</h3><i class="fa-solid fa-cloud"></i> {cloudiness}
            </p>

            <Modal showModal={showModal} openModalFunc={setShowModal} onClose={onClose}>
                <div className={`${styles['detail-card']} ${styles[getWeatherType()]}`}>

                    <div className={styles['detail-flex-day']}>
                        <p>Morning</p>
                        <p>Day</p>
                        <p>Evening</p>
                    </div>

                    <div className={styles['detail-flex']}>
                        <p>{`${Math.round(detailedTempData.temp_morning)}°`}</p>
                        <p>{`${Math.round(detailedTempData.temp_day)}°`}</p>
                        <p>{`${Math.round(detailedTempData.temp_evening)}°`}</p>
                    </div>

                    <p className={styles['text']}><i class="fa-solid fa-droplet fa-2x"></i> : {Math.round(detailedTempData.humidity)}%</p>

                    <p className={styles['icon']}>weather: { getStaticIcon(weather) }</p>
                </div>
            </Modal>

        </div>
    )
}

export default TimeCardWeather;