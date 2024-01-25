
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import WeatherContainer from './components/WeatherContainer';

import { 
  HOME_RATH,
  HOURLY_RATH,
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
      </Routes>
      {/* <WeatherContainer /> */}

      <Footer />

    </div>
  );
}

export default App;
