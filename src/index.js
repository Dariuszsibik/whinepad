import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Whinepad from './components/Whinepad.js';
import schema from './schema.js';
import CRUDStore from './flux/CRUDStore';

CRUDStore.init(schema);
/*
let data: Array<Object>;
const storage: ?string = localStorage.getItem('data');
if (!storage) {
  data = [{}];
  schema.forEach(item => data[0][item.id] = item.sample);      
} else {
  data = JSON.parse(storage);
}
  <Whinepad schema={schema} initialData={data} />
*/
ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo/> Witaj w Whinepad!
    </div>
    <Whinepad />
  </div>,
  document.getElementById('pad')
);
