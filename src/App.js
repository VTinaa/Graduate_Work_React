
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import WeatherContainer from './components/WeatherContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <WeatherContainer />

      <Footer />

    </div>
  );
}

export default App;
