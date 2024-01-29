import styles from './dailyForecast.module.css';
import { useState, useEffect, useContext } from 'react';

import PageWrapper from '../PageWrapper/PageWrapper';
import TimeCardWeather from '../TimeCardWeather/TimeCardWeather';
import DetailedCardWeather from '../DetailedCardWeather/DetailedCardWeather';

import CoordinatesContext from '../../Contexts';

// https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt=16&appid={API key}


const DailyForecast = () => {

//     const [ weatherData, setWeatherData ] = useState(null);
//     const [ fetching, setFetching ] = useState(false);
//       const [fetchError, setFetchError] = useState(null);

//     useEffect(() => {
//         const apiKey = '54d7ff260ae0839a16f55b92aaa0c556';
//         const lat = 44.34;
//         const lon = 10.99;
//         setFetching(true);
//         fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=16&appid=54d7ff260ae0839a16f55b92aaa0c556`)
//             .then(response => response.json())
//             .then(resp => {
//                 setWeatherData(resp)
//                 setFetching(false)
//             })
//             .catch(error => {
//                 // console.error('Error fetching weather data:', error);
//                 setFetching(false)
//                 // setFetchError(err)
//             })
//     }, []);

    const coordinates = useContext(CoordinatesContext);

    const [ weatherData, setWeatherData ] = useState(null);
    const [futureWeatherData, setFutureWeatherData] = useState(null);

    const [ fetching, setFetching ] = useState(false);
      const [fetchError, setFetchError] = useState(null);

useEffect(() => {
    const apiKey = '54d7ff260ae0839a16f55b92aaa0c556';
    setFetching(true);

    const fetchCurrentWeatherData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coordinates.lat}&lon=${coordinates.lon}&cnt=16&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        setWeatherData(data);
        setFetching(false);
      } catch (error) {
        setFetchError(error);
      }
    };

    const fetchFutureWeatherData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coordinates.lat}&lon=${coordinates.lon}&cnt=16&appid=${apiKey}`;
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
        <PageWrapper>
            <h2>Daily Forecast 16 days </h2>
            <div className={styles['common']}>

            {weatherData && weatherData.list && weatherData.list.length > 0 && (
                weatherData.list.map((item, index) => (
                    <DetailedCardWeather
                        key={index}
                        name={weatherData.city.name}
                        id={weatherData.city.id}
                        day={item.temp.day}
                        night={item.temp.night}
                        humidity={item.humidity}
                        description={item.weather[0].description}
                        gust={item.gust}
                        rain={item.rain}
                        icon={item.weather[0].icon}
                    />
                ))
            )}

            </div>
        </PageWrapper>
    )
}

export default DailyForecast;