
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import WeatherContainer from './components/WeatherContainer';
import DailyForecast from './components/DailyForecast/DailyForecast';
import ClimaticForecast from './components/ClimaticForecast/ClimaticForecast';

import { 
  HOME_RATH,
  CLIMATIC_RATH,
  DAILY_RATH
 } from "./constants/pathNames"
import { Route, Routes } from 'react-router';
import classNames from 'classnames';

function App() {

  const weatherType = "cloud";

  const weatherSlassName = classNames('App', 
  {
    "cloud-bg" : weatherType === "cloud",
    "rain-bg" : weatherType === "rain",
    "sun-bg" : weatherType === "sun",
  }
  );
  console.log(weatherSlassName)
  return (
    <div className={weatherSlassName}>
      <Header />
      <Routes>
        <Route path={HOME_RATH} element={<WeatherContainer />} />
        <Route path={DAILY_RATH} element={<DailyForecast />} />
        <Route path={CLIMATIC_RATH} element={<ClimaticForecast />} />
      </Routes>
      {/* <WeatherContainer /> */}

      <Footer />

    </div>
  );
}

export default App;
