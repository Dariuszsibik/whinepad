import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';
import Suggest from './components/Suggest.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>
<h2> Suggest </h2>
<div><Suggest options ={['eenie', 'meenie', 'miney', 'mo']} /></div>
</div>,
  document.getElementById('pad')
);