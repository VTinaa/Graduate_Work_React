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
      } catch (error) {
        setFetchError(error);
      }
    };

    const fetchFutureWeatherData = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        const fileteredData = filterFutureDaysData(data.list);
        setFutureWeatherData(fileteredData);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchCurrentWeatherData();
    fetchFutureWeatherData();

    setFetching(false);
  }, [coordinates]);

  const filterFutureDaysData = (list) => {
    const todayDate = new Date();
    const todayDay = String(todayDate.getDate()).padStart(2, '0');
    let days = [];
    let futureDaysWeatherData = [];

    const filteredDaysWeatherData = list.filter((info) => {
      let currentDate = new Date(info.dt_txt);
      const currentDay = String(currentDate.getDate()).padStart(2, '0');

      if (todayDay != currentDay) {
        days.push(currentDay);
        info.currentDay = currentDay;
        return info;
      }
    });
    
    days = [... new Set(days)];
    const times = ['09:00:00', '15:00:00', '21:00:00'];

    days.forEach(element => {
      const allWeatherDataByDay = filteredDaysWeatherData.filter(x => x.currentDay == element);

      const detailedDataByDay = allWeatherDataByDay.filter(data => {
        const hours = data.dt_txt.split(' ')[1];
        if (times.includes(hours)){
          return data;
        }
      });

      let maxTempDataByDay = allWeatherDataByDay.reduce((maxTemp, currentTemp) => {
        return currentTemp.main.temp_max > maxTemp.main.temp_max ? currentTemp : maxTemp;
      }, allWeatherDataByDay[0]);

      let minTempDataByDay = allWeatherDataByDay.reduce((minTemp, currentTemp) => {
        return currentTemp.main.temp_min < minTemp.main.temp_min ? currentTemp : minTemp;
      }, allWeatherDataByDay[0]);
      
      const currentWeatherData = filteredDaysWeatherData.find((x) => x.currentDay == element);

      futureDaysWeatherData.push({
        dt_txt: currentWeatherData.dt_txt,
        temp_min: minTempDataByDay.main.temp_min,
        temp_max: maxTempDataByDay.main.temp_max,
        weather: currentWeatherData.weather[0].id,
        cloudiness: Math.round((minTempDataByDay.clouds.all + maxTempDataByDay.clouds.all) / 2),
        detailedTempData: {
          temp_morning: detailedDataByDay.length == 3 ? detailedDataByDay[0].main.temp : Math.random(3),
          temp_day: detailedDataByDay.length == 3 ? detailedDataByDay[1].main.temp : Math.random(3),
          temp_evening: detailedDataByDay.length == 3 ? detailedDataByDay[2].main.temp : Math.random(3),
          humidity: detailedDataByDay.length == 3 ? 
            (detailedDataByDay[0].main.humidity + detailedDataByDay[1].main.humidity + detailedDataByDay[2].main.humidity) / 3 :
            Math.random(100)
        }
      });
    });

    return futureDaysWeatherData;
  };

  const preapereDate = (date) => {
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const currentDateObject = new Date(date);
    
    return weekdays[currentDateObject.getDay()];
  };

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
                cloudiness={ currentWeatherData.clouds.all }
                description={ currentWeatherData.weather[0].description }
                // icon={currentWeatherData.weather[0].main}
              />
            )}
          </div>

          <div className={styles['time__card']}>
            {
              futureWeatherData && 
              <>
                <TimeCardWeather 
                  date={preapereDate(futureWeatherData[0].dt_txt)} 
                  weather={futureWeatherData[0].weather}
                  minTemp={ `${Math.round(futureWeatherData[0].temp_min)}°`} 
                  maxTemp={`${Math.round(futureWeatherData[0].temp_max)}°`} 
                  detailedTempData={futureWeatherData[0].detailedTempData}
                  cloudiness={`${Math.round(futureWeatherData[0].cloudiness)}%`}/> 
                <TimeCardWeather 
                  date={preapereDate(futureWeatherData[1].dt_txt)}
                  weather={futureWeatherData[1].weather} 
                  minTemp={ `${Math.round(futureWeatherData[1].temp_min)}°`} 
                  maxTemp={`${Math.round(futureWeatherData[1].temp_max)}°`} 
                  detailedTempData={futureWeatherData[1].detailedTempData}
                  cloudiness={`${Math.round(futureWeatherData[1].cloudiness)}%`}/>
                <TimeCardWeather 
                  date={preapereDate(futureWeatherData[2].dt_txt)}
                  weather={futureWeatherData[2].weather} 
                  minTemp={`${Math.round(futureWeatherData[2].temp_min)}°`} 
                  maxTemp={`${Math.round(futureWeatherData[2].temp_max)}°`} 
                  detailedTempData={futureWeatherData[2].detailedTempData}
                  cloudiness={`${Math.round(futureWeatherData[2].cloudiness)}%`}/>
                <TimeCardWeather 
                  date={preapereDate(futureWeatherData[3].dt_txt)}
                  weather={futureWeatherData[3].weather} 
                  minTemp={ `${Math.round(futureWeatherData[3].temp_min)}°`} 
                  maxTemp={`${Math.round(futureWeatherData[3].temp_max)}°`} 
                  detailedTempData={futureWeatherData[3].detailedTempData}
                  cloudiness={`${Math.round(futureWeatherData[3].cloudiness)}%`}/>
              </>
            }
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