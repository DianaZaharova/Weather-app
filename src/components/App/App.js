import React from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import WeatherInput from '../WeatherInput/WeatherInput';
import Title from '../Title/Title';
import Location from '../Location/Location';
import s from './App.module.css';
import Container from '@material-ui/core/Container';


class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    weather: undefined,
    temp: null,
    feelsLike: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const weatherData = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=531820fb97d6eba87f4690ba2eec5a2c`)
        .then(res => res.json())

    if (city) {
      this.setState({
        city: weatherData.name,
        weather: weatherData.weather[0].description,
        temp: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        country: weatherData.sys.country,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        weather: undefined,
        temp: null,
        feelsLike: undefined,
        country: undefined,
        error: "Пожалуйста, введите название города"
      });
    }
  };


  render() {
    return (
      <div className={(this.state.temp > 16)
        ? s.app_warm
        : s.app_cold}>
        {/* <main className={s.wrap}> */}
        <Container maxWidth="md">
          <Title />
          <WeatherInput gettingWeather={this.gettingWeather} />
          <Location
            city={this.state.city}
            country={this.state.country} />
          <WeatherInfo
            weather={this.state.weather}
            temp={this.state.temp}
            feelsLike={this.state.feelsLike}
            error={this.state.error}
          />
        </Container>
      </div >
    )
  }
};

export default App;
