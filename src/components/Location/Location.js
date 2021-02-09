import React from 'react';
import s from './Location.module.css';


const Location = props => {

  const dateBuilder = (d) => {
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
    let days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };

  return (
    <div>
      {props.city && <div className={s.city}>{props.city}, {props.country}</div>}
      {props.city && <div className={s.date}>{dateBuilder(new Date())}</div>}
    </div>
  )
};

export default Location;