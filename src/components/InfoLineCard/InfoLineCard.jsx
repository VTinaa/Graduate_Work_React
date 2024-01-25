import styles from './infoLineCard.module.css'

const InfoLineCard = (props) => {
    const { speed, pressure, humidity, sunrise, sunset }= props;
    return(
        <div className={styles['common']}>
            <div> 
                <i class="fa-solid fa-wind"></i>
                <h5>Wind</h5>
                {/* { speed ? `${speed}` : "m/s" }  */}
                { speed }m/s
            </div>
            <div>
                <i class="fa-solid fa-gauge"></i>
                <h5>Pressure</h5>
                { pressure }hPa 
            </div>
            <div>
            <i class="fa-solid fa-droplet"></i>
                <h5>Humidity</h5>
                { humidity }%
            </div>
            <div>
            <i class="fa-solid fa-arrow-up"></i>
            <i class="fa-solid fa-sun"></i>
                <h5>Sunrise</h5>
                { sunrise } AM
            </div>
            <div>
            <i class="fa-solid fa-arrow-down"></i>
            <i class="fa-solid fa-sun"></i>
                <h5>Sunset</h5>
                { sunset } PM
            </div>
        </div>
    )
}

export default InfoLineCard;