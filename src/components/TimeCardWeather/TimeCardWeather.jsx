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
    const { date, minTemp, maxTemp, cloudiness, weather } = props;
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
            return <Sun topPosition />
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
            return <i class="fa-solid fa-cloud-showers-heavy"></i> 
        } else if (weather > 232 && weather < 800) {
            return <i class="fa-solid fa-cloud-rain"></i>
        } else if (weather == 800) {
            return <i class="fa-solid fa-sun"></i>
        } else if (weather > 800 && weather < 803) {
            return <i class="fa-solid fa-cloud-sun"></i>
        } else if (weather == 803 || weather == 804) {
            return <i class="fa-solid fa-cloud"></i>
        } else {
            return <i class="fa-solid fa-cloud-sun-rain"></i>
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
            {/*  Now || 11am */}
            <h3 className={styles['time__title']}>{date}</h3>
            { getWeatherIcon() }
            {/* <Sun /> */}
            {/* <Storm stormTopPosition /> */}
            {/* <Storm /> */}
            {/* <Clouds topPosition /> */}

            {/* <MoonRain smallTopPadding />*/}
            {/* <SunRain smallTopPadding /> */}
            
            {/* <PartlyCloudy smallTopPadding /> */}
            {/* <MoonPartyCloudy smallTopPadding/> */}
            
            <div className={styles['temp_max']}>
                <p>{minTemp}</p>
                <p>{maxTemp}</p>
            </div>
            <p className={styles['real-fell__center']}>
                <h3>Cloudiness</h3><i class="fa-solid fa-cloud"></i> {cloudiness}
            </p>

            <Modal showModal={showModal} openModalFunc={setShowModal} onClose={onClose}>
                <div className={`${styles['detail-card']} ${getWeatherType()}`}>
                    <div className={styles['detail-flex']}>
                        <p>temp morning </p>
                        <p>temp daytime</p>
                        <p>temp evening</p>
                    </div>
                    <p>air humidity %</p>
                    { getStaticIcon() }
                    <p>weather : rain/ sun{weather}</p>
                </div>
            </Modal>

        </div>
    )
}

export default TimeCardWeather;