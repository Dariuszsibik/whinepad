import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';
import Suggest from './components/Suggest.js';
import Rating from './components/Rating.js';
import FormInput from './components/Forminput.js';
import Form from './components/Form.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>

    <Form
        fields={[
            {label: 'Ocena', type: 'rating', id: 'rateme'},
            {label: 'Pozdrowienia', id:'freetext'},
        ]}
        initialData={{rateme:4, freetext: 'Witaj'}} 
    />


</div>,

  document.getElementById('pad')
);