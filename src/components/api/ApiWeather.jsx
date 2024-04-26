import React, { Component } from 'react';
import axios from 'axios';

class WeatherComponent extends Component {
  state = {
    weatherData: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    // Aquí debes reemplazar 'TU_API_KEY' con la clave de tu API de OpenWeatherMap
    const apiKey = '22cf39fe2656a56eaac91872f1fbd9a4';
    const city = 'Argentina,buenos aires';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          weatherData: response.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: 'Error al cargar los datos del clima',
          loading: false
        });
      });
  }

  render() {
    const { weatherData, loading, error } = this.state;

    if (loading) {
      return <div>Cargando...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }
    const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    return (
      <div>
        {/* <h2>Información del clima</h2> */}
        
        <div className='flex'>
        <img src={iconUrl} alt="Icono del clima" />
        <div>
        <p>{weatherData.main.temp}°C</p>
        <p>{weatherData.name}</p>
        </div>
        </div>
        
      </div>
    );
  }
}

export default WeatherComponent;