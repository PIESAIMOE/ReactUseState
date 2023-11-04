import React, { useState } from 'react';

function Tempo() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [temperature, setTemperature] = useState('celsius');

  const handleCelsius = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setTemperature('celsius');
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheit = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setTemperature('fahrenheit');
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      setCelsius(celsiusValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div className='form'>
      <div className='form_container'>
        <h3>Temperature Converter</h3>
        <div className='box'>
          <label>Celsius: </label>
          <input
            type="text"
            value={celsius}
            onChange={handleCelsius}
          />
        </div>
        <div className='box'>
          <label>Fahrenheit: </label>
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheit}
          />
        </div>
        <div className='box'>
          <span>
            {temperature === 'celsius' ? (
              <p>Fahrenheit: {fahrenheit} °F</p>
            ) : (
              <p>Celsius: {celsius}°C</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tempo;

