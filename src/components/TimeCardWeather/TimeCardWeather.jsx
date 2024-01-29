import Clouds from '../AnimatedIcon/Clouds/Clouds';
import PartlyCloudy from '../AnimatedIcon/PartlyCloudy/PartlyCloudy';
import styles from './timeCardWeather.module.css'
import Storm from '../AnimatedIcon/Storm/Storm';
import Sun from '../AnimatedIcon/Sun';
import MoonPartyCloudy from '../AnimatedIcon/MoonPartyCloudy/MoonPartyCloudy';

import Modal from '../Modal/Modal';

import { useState } from 'react';
import MoonRain from '../AnimatedIcon/MoonRain/MoonRain';
import SunRain from '../AnimatedIcon/SunRain/SunRain';


let modalContent = (
    <div className={styles['detail-card']}>

    </div>
)

const TimeCardWeather = (props) => {
    const { date, minTemp, maxTemp, cloudiness, modalContent } = props;
    const [ showModal, setShowModal ] = useState(false);

    const onClose = () => {
        setShowModal(false);
    
    }
    const onShow = () => {
        setShowModal(true)
    }

    return(
        <div className={styles['common__row']}>
            {/*  Now || 11am */}
            <h3 className={styles['time__title']}>{date}</h3>
            {/* <Sun /> */}
            {/* <Storm /> */}
            {/* <Clouds topPosition /> */}

            {/* <MoonRain smallTopPadding />*/}
            {/* <SunRain smallTopPadding /> */}
            
            <PartlyCloudy smallTopPadding />
            {/* <MoonPartyCloudy smallTopPadding/> */}
            
            <div className={styles['temp_max']}>
                <p>{minTemp}</p>
                <p>{maxTemp}</p>
            </div>
            <p className={styles['real-fell__center']}>
                <h3>Cloudiness</h3><i class="fa-solid fa-cloud"></i> {cloudiness}
            </p>

            <Modal showModal={showModal} openModalFunc={setShowModal}>
                {modalContent}
            </Modal>

        </div>
    )
}

export default TimeCardWeather;