import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setDateTime(new Date());
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  // Obtener la hora, los minutos y los segundos
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  // Obtener el día, el mes y el año
  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
  const year = dateTime.getFullYear();
  return (
    <div>
       <div>Fecha: {day}/{month}/{year}</div>
      <div>Hora: {hours}:{minutes}:{seconds}</div>
    </div>
  );
}

export default Timer;