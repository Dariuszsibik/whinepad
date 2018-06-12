import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';
import Suggest from './components/Suggest.js';
import Rating from './components/Rating.js';
import FormInput from './components/Forminput.js';
import Form from './components/Form.js';
import Actions from './components/Actions.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>

<h2> akcje </h2>
<div><Actions onAction={type => alert(type)} /> </div>


</div>,

  document.getElementById('pad')
);