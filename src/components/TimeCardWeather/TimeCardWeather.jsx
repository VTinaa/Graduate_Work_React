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

    const [ showModal, setShowModal ] = useState(false);

    const onClose = () => {
        setShowModal(false);
    
    }
    const onShow = () => {
        setShowModal(true)
    }

    const { temp_max, temp_min, feels_like } = props;
    return(
        <div className={styles['common__row']}>
            {/*  Now || 11am */}
            <h3 className={styles['time__title']}>11am </h3>
            {/* <Sun /> */}
            {/* <Storm /> */}
            {/* <Clouds topPosition /> */}

            {/* <MoonRain smallTopPadding />*/}
            {/* <SunRain smallTopPadding /> */}
            
            <PartlyCloudy smallTopPadding />
            {/* <MoonPartyCloudy smallTopPadding/> */}
            
            <div className={styles['temp_max']}>
                <p>{temp_max ? `${temp_max}°` : `30°`}</p>
                <p>{temp_min ? `${temp_min}°` : `28°`}</p>
            </div>
            <p className={styles['real-fell__center']}>
                <h3>Real Fell</h3>
                {feels_like ? `${feels_like}°` : `25°`}
            </p>

            <Modal showModal={showModal} openModalFunc={setShowModal}>
                {modalContent}
            </Modal>

        </div>
    )
}

export default TimeCardWeather;