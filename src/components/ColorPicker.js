import React, { useState } from 'react';

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleColorChange = (channel, value) => {
    switch (channel) {
      case 'red':
        setRed(value);
        break;
      case 'green':
        setGreen(value);
        break;
      case 'blue':
        setBlue(value);
        break;
      default:
        break;
    }
  };

  const colorStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    width: '600px',
    height: '300px',
    marginTop: '20px',
    border: '1px solid #ccc',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    padding: '5px',
  };

  const labelStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
    color: 'black', // Añadido para el color del texto
    
  };

  const inputStyle = {
    width: '100%',
    background: 'black',
    color: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '5px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>
          <span>Red</span>
          <span>{red}</span>
        </label>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={(e) => handleColorChange('red', e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>
          <span>Green</span>
          <span>{green}</span>
        </label>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={(e) => handleColorChange('green', e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>
          <span>Blue</span>
          <span>{blue}</span>
        </label>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={(e) => handleColorChange('blue', e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={colorStyle}></div>
    </div>
  );
};

export default ColorPicker;
