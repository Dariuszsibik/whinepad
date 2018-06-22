import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Whinepad from './components/Whinepad.js';
import schema from './schema.js';

let data = JSON.parse(localStorage.getItem('data'));

// domyślne dane przykładowe, odczytane z obiektu schema
if (!data) {
  data = {};
  schema.forEach((item) => data[item.id] = item.sample);
  data = [data];
}

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo/> Witaj w Whinepad!
    </div>
    <Whinepad schema={schema} initialData={data} />
  </div>,
  document.getElementById('pad')
);
