import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>
  <h2>Logo</h2>
  <div style={{display: 'inline-block', background: 'purple'}} >
    <Logo />
  </div>

  <div> Przyciski z onClick: <Button onClick={() => alert('aui')}> Kliknij mnie </Button></div>
  <div> Łącze <Button className="custom"> Nic nie robię </Button></div>
  <div>Nazwa klasy custom: <Button className="custom"> Nic nie robię </Button> </div>
</div>,
  document.getElementById('pad')
);