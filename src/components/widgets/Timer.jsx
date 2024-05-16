import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); 
  const year = dateTime.getFullYear();
  return (
    <div>
       <div>Fecha: {day}/{month}/{year}</div>
      <div>Hora: {hours}:{minutes}:{seconds}</div>
    </div>
  );
}

export default Timer;