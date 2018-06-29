/*@flow*/

import Button from './Button';
import Dialog from './Dialog';
import Excel from './Excel';
import Form from './Form';
import React, {Component} from 'react';
import CRUDStore from '../flux/CRUDStore';
import CRUDActions from '../flux/CRUDActions';

type State = {
  addnew: boolean,
  count: number,
};

class Whinepad extends Component {
  
  state: State;
  
  constructor() {
    super();
    this.state = {
      addnew: false,
      count: CRUDStore.getCount(),
    };
    
    CRUDStore.addListener('change', () => {
      this.setState({
        count: CRUDStore.getCount(),
      })
    });
  }
  
  shouldComponentUpdate(newProps: Object, newState: State): boolean {
    return newState.addnew !== this.state.addnew || newState.count !== this.state.count;
  }
  
  _addNewDialog() {
    this.setState({addnew: true});
  }
  
  _addNew(action: string) {
    this.setState({addnew: false});
    if (action === 'confirm') {
      CRUDActions.create(this.refs.form.getData());
    }
  }
    
  render() {
    return (
      <div className="Whinepad">
        <div className="WhinepadToolbar">
          <div className="WhinepadToolbarAdd">
            <Button 
              onClick={this._addNewDialog.bind(this)}
              className="WhinepadToolbarAddButton">
              + dodaj
            </Button>
          </div>
          <div className="WhinepadToolbarSearch">
            <input 
              placeholder={this.state.count === 1
                ? 'Wyszukaj 1 rekord...'
                : `Wyszukaj ${this.state.count} rekordów...`
              } 
              onChange={CRUDActions.search.bind(CRUDActions)}
              onFocus={CRUDActions.startSearching.bind(CRUDActions)} />
          </div>
        </div>
        <div className="WhinepadDatagrid">
          <Excel />
        </div>
        {this.state.addnew
          ? <Dialog 
              modal={true}
              header="Dodaj nowy element"
              confirmLabel="Dodaj"
              onAction={this._addNew.bind(this)}
            >
              <Form ref="form" />
            </Dialog>
          : null}
      </div>
    );
  }
}

export default Whinepad
