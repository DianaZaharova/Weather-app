import React from 'react';
import s from './WeatherInput.module.css';


const WeatherInput = props => (
  <div className={s.wrap}>
    <form
      className={s.form}
      onSubmit={props.gettingWeather}>
      <input
        className={s.input}
        type="text"
        name="city"
        placeholder="Название города" />
      <button
        className={s.button}>
        ПОИСК</button>
    </form>
  </div>
);

export default WeatherInput;