import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';
import Suggest from './components/Suggest.js';
import Rating from './components/Rating.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>
<h2> Ocena </h2>
<div> Brak wartości początkowej: <Rating /></div>
<div> Początkowa wartość 4: <Rating defaultValue={4} /></div>
<div> Tutaj najwyższa wartość wynosi 11: <Rating max={11} /></div>
<div> Tylko do odczytu: <Rating readonly={true} defaultValue={3} /></div>
</div>,

  document.getElementById('pad')
);