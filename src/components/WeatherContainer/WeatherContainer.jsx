import PageWrapper from '../PageWrapper/PageWrapper';

import CardWeather from '../CardWeather';
import TimeCardWeather from '../TimeCardWeather/TimeCardWeather';
import InfoLineCard from '../InfoLineCard/InfoLineCard';

import { useEffect, useState } from 'react';

import styles from './weatherContainer.module.css'

const WeatherContainer = () => {

  const [ weatherData, setWeatherData ] = useState(null);

  // useEffect(() => {
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=54d7ff260ae0839a16f55b92aaa0c556`)
  //         .then(response => response.json())
  //         .then(resp => console.log(resp))
  //         .catch (error => {
  //             console.error('Error fetching weather data:', error);
  //           })
  // },[]);

  useEffect(() => {
    const apiKey = '54d7ff260ae0839a16f55b92aaa0c556';
    const lat = 44.34;
    const lon = 10.99;
    // const lat = 'San';
    // const lon = 'Francisco';
    // Функция для получения данных с API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData(); // Вызов функции при монтировании компонента
  }, []);

  return (
    // <div className={styles['common']}>Basic Category</div>
    <PageWrapper>
      <div className={styles['container__flex']}>
        <div className={styles['common']}>
          {weatherData && (
            <CardWeather
              coord={ weatherData.coord }
              temp={ weatherData.main.temp }
              main={ weatherData.weather[0].main }
              humidity={ weatherData.main.humidity }
              description={ weatherData.weather[0].description }
              icon={weatherData.weather[0].main}
            />
          )}
        </div>

        <div className={styles['time__card']}>
          <TimeCardWeather />
          <TimeCardWeather />
          <TimeCardWeather />
          <TimeCardWeather />
        </div>
      </div>
      <div>
        {weatherData && (
          <InfoLineCard
            speed={ weatherData.wind.speed }
            pressure={ weatherData.main.pressure }
            humidity={ weatherData.main.humidity }
            sunrise={ weatherData.sys.sunrise }
            sunset={ weatherData.sys.sunset }
          />
         )}
      </div>
      <div className={styles['weathe-day']}>

      </div>
    </PageWrapper>
  )
}

export default WeatherContainer;