import React from 'react';
import s from './WeatherInfo.module.css';


const WeatherInfo = props => (
  <div>
    <div>
      <p className={s.error}>{props.error}</p>
      <div className={s.card_wrap}>

        {props.temp && <div className={s.card}>
          <p className={s.title}>Температура</p>
          <p className={s.temp}>{Math.floor(props.temp)}°C</p>
        </div>}

        {props.feelsLike && <div className={s.card}>
          <p className={s.title}>Чувствуется как</p>
          <p className={s.feelsLike}>{Math.floor(props.feelsLike)}°C</p>
        </div>}

      </div>
      {props.weather && <p className={s.weather}>{props.weather}</p>}
    </div>
  </div >
);


export default WeatherInfo;