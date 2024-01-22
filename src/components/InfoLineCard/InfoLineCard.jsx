import styles from './infoLineCard.module.css'

const InfoLineCard = (props) => {
    const { speed, pressure, humidity, sunrise, sunset }= props;
    return(
        <div className={styles['common']}>
            <div> 
                <h5>Wind</h5>
                {/* { speed ? `${speed}` : "m/s" }  */}
                { speed }m/s
            </div>
            <div>
                <h5>Pressure</h5>
                { pressure }hPa 
            </div>
            <div>
                <h5>Humidity</h5>
                { humidity }%
            </div>
            <div>
                <h5>Sunrise</h5>
                { sunrise } AM
            </div>
            <div>
                <h5>Sunset</h5>
                { sunset } PM
            </div>
        </div>
    )
}

export default InfoLineCard;