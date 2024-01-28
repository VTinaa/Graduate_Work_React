import PageWrapper from '../PageWrapper/PageWrapper';
import QueryLoader from '../QueryLoader/QueryLoader'

import CardWeather from '../CardWeather';
import TimeCardWeather from '../TimeCardWeather/TimeCardWeather';
import InfoLineCard from '../InfoLineCard/InfoLineCard';
import Navigation from '../Navigation/Navigation';
import CoordinatesContext from '../../Contexts';

import { useContext, useEffect, useState } from 'react';

import styles from './weatherContainer.module.css'

const WeatherContainer = () => {
  const coordinates = useContext(CoordinatesContext);

  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [futureWeatherData, setFutureWeatherData] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  // Визначає поточну погоду
  useEffect(() => {
    const apiKey = '54d7ff260ae0839a16f55b92aaa0c556';
    setFetching(true);

    const fetchCurrentWeatherData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        setCurrentWeatherData(data);
        setFetching(false);
      } catch (error) {
        setFetchError(error);
      }
    };

    const fetchFutureWeatherData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        setFutureWeatherData(data);
        // setFetching(false);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchCurrentWeatherData();
    fetchFutureWeatherData();

    setFetching(false);
  }, [coordinates]);

  return (
    // <div className={styles['common']}>Basic Category</div>
    <PageWrapper>
      <QueryLoader fetching={fetching} error={fetchError}>
        <div className={styles['container__flex']}>
          <div className={styles['common']}>
            {currentWeatherData && (
              <CardWeather
                cityName={currentWeatherData.name}
                weather={ currentWeatherData.weather[0].id }
                temp={ `${Math.round(currentWeatherData.main.temp)}°` }
                main={ currentWeatherData.weather[0].main }
                humidity={ currentWeatherData.main.humidity }
                description={ currentWeatherData.weather[0].description }
                icon={currentWeatherData.weather[0].main}
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
          {currentWeatherData && (
            <InfoLineCard
              speed={ currentWeatherData.wind.speed }
              pressure={ currentWeatherData.main.pressure }
              humidity={ currentWeatherData.main.humidity }
              sunrise={ currentWeatherData.sys.sunrise }
              sunset={ currentWeatherData.sys.sunset }
            />
          )}
        </div>
        <div className={styles['weathe-day']}>

        </div>
        <Navigation />
      </QueryLoader>
    </PageWrapper>
  )
}

export default WeatherContainer;