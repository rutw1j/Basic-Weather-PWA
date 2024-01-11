import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './app.css';

const App = () => {

    const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
	
	const search = async (event) => {
		if(event.key === 'Enter'){
			const weather_data = await fetchWeather(query);
			setWeather(weather_data);
			setQuery('');
		}
	}

    return (
        <div className='main-container'>

			<h1> WEATHER APP </h1>

			<input type='text' className='search' placeholder='Enter Name of Place' value={query} onChange={(event) => setQuery(event.target.value)} onKeyPress={search}/>

			{ weather.main && (
				<div className='city'>

					<h2 className='city-name'>
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
					</h2>

					<div className='weather-data'>
						<div className='city-temp'>
							<span>{Math.round(weather.main.temp)}<sup>&deg;C</sup></span>
							
							<br/>
							<p> Temperature </p>
						</div>

						<div className='info'>
							<img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
							<br/> 
							<p>{weather.weather[0].description}</p>
						</div>
					</div>

				</div>	
			)}

		</div>
    );
}

export default App;