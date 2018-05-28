import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Excel from './components/Excel.js';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
  headers = ['Tytuł', 'Rok', 'Ocena', 'Komentarze'];
  data = [['Test', '2015', '3', 'eh']];
}


ReactDOM.render(
<div>
  <h1>
    <Logo /> Witaj w Whinepad!
  </h1>,
  <Excel headers={headers} initialData={data} />
</div>,
  document.getElementById('pad')
);