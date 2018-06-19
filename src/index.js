import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo.js';
import Button from './components/Button';
import Suggest from './components/Suggest.js';
import Rating from './components/Rating.js';
import FormInput from './components/Forminput.js';
import Form from './components/Form.js';
import Actions from './components/Actions.js';
import Dialog from './components/Dialog.js';

ReactDOM.render(
<div style={{padding: '20px'}}>
  <h1>Wykrywacz Komponentów</h1>

<Dialog
  header="Gotowy przykład"
  onAction={type => alert(type)}>
    Witaj w oknie dialogowym!
</Dialog>

<Dialog
  header="Bez anulowania, z niestandardowym przycyskiem"
  hasCancel={false}
  confirmLabel="Cokolwiek"
  onAction={type => alert(type)}>
    Tutaj jest miejsce na cokolwiek, patrz:
    <Button>Przycisk</Button>
</Dialog>

</div>,

  document.getElementById('pad')
);