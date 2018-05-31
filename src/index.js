import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>
  <h2>Logo</h2>
  <div style={{display: 'inline-block', background: 'purple'}} >
    <Logo />
  </div>
</div>,
  document.getElementById('pad')
);