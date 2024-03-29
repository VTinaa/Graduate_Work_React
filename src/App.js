
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import WeatherContainer from './components/WeatherContainer';
import DailyForecast from './components/DailyForecast/DailyForecast';
import ClimaticForecast from './components/ClimaticForecast/ClimaticForecast';
import CoordinatesContext from './Contexts';

import { 
  HOME_RATH,
  CLIMATIC_RATH,
  DAILY_RATH
 } from "./constants/pathNames"
import { Route, Routes } from 'react-router';
import classNames from 'classnames';
import { useState } from 'react';

const getCurrentWeatherType = () => {
  const currentHour = new Date().getHours();
  // return currentHour >= 0 && currentHour < 12 ? 'day' : 'nigth';
    // між опівночі i 12год дня
  return currentHour >= 0 && currentHour < 12 ? 'nigth' : 'day';
};

function App() {
  const [coordinates, setCoordinates] = useState({lat: 50.6196175, lon: 26.2513165});
  // const weatherType = "cloud";

  // const weatherClassName = classNames('App', 
  // {
  //   "cloud-bg" : weatherType === "cloud",
  //   "rain-bg" : weatherType === "rain",
  //   "sun-bg" : weatherType === "sun",
  // });
  const weatherType = getCurrentWeatherType();

  const weatherClassName = classNames('App', {
    'day-bg': weatherType === 'day',
    'nigth-bg': weatherType === 'nigth',
  });

  return (
    <div className={weatherClassName}>
      <CoordinatesContext.Provider value={coordinates}>
        <Header setCoordinates={setCoordinates}/>
        <Routes>
          <Route path={HOME_RATH} element={<WeatherContainer />} />
          <Route path={DAILY_RATH} element={<DailyForecast />} />
          <Route path={CLIMATIC_RATH} element={<ClimaticForecast />} />
        </Routes>
        <Footer />
      </CoordinatesContext.Provider>
    </div>
  );
}

export default App;
