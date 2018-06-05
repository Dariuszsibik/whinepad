import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';
import Suggest from './components/Suggest.js';
import Rating from './components/Rating.js';
import FormInput from './components/Forminput.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>


<h2>Elementy Formularza</h2>
<table><tbody>
    <tr>
        <td>Zwykły element formularza</td>
        <td><FormInput/></td>
    </tr>
    <tr>
        <td>Wstępnie wypełnioy</td>
        <td><FormInput defaultValue="wartość domyślna" /></td>
    </tr>
    <tr>
        <td>Wstępnie wypełniony</td>
        <td><FormInput defaultValue="wartość domyślna" /></td>
    </tr>
    <tr>
        <td>Rok</td>
        <td><FormInput type="year" /></td>
    </tr>
    <tr>
        <td>Ocena</td>
        <td><FormInput type="rating" defaultValue={4} /></td>
    </tr>
    <tr>
        <td>Sugestia</td>
        <td><FormInput type="suggest"
        options={['czerwony', 'zielony', 'niebieski']}
        defaultValue="zielony" />
        </td>
    </tr>
    <tr>
        <td>Zwykły obszar tekstowy</td>
        <td><FormInput type="text" /></td>
    </tr>
    </tbody></table>

</div>,

  document.getElementById('pad')
);