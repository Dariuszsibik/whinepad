import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Whinepad from './components/Whinepad.js';
import schema from './schema.js';

let data: Array<Object>;
const storage: ?string = localStorage.getItem('data');
if (!storage) {
  data = [{}];
  schema.forEach(item => data[0][item.id] = item.sample);      
} else {
  data = JSON.parse(storage);
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
