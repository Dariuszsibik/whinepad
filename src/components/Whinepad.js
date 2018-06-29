/*@flow*/

import Button from './Button';
import Dialog from './Dialog';
import Excel from './Excel';
import Form from './Form';
import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import CRUDStore from '../flux/CRUDStore';
import CRUDActions from '../flux/CRUDActions';

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
      return(
        newState.adnew !== this.state.addnew ||
        newState.count !== this.state.count
      );
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

    _onExcelDataChange(data) {
      this.setState({data: data});
      this._commitToStorage(data);
    }
    
    _commitToStorage(data) {
      localStorage.setItem('data', JSON.stringify(data));
    }
    
    _startSearching() {
      this._preSearchData = this.state.data;
    }
    
    _doneSearching() {
      this.setState({
        data: this._preSearchData,
      });
    }
  
    _search(e) {
      const needle = e.target.value.toLowerCase();
      if (!needle) {
        this.setState({data: this._preSearchData});
        return;
      }
      const fields = this.props.schema.map(item => item.id);
      const searchdata = this._preSearchData.filter(row => {
        for (let f = 0; f < fields.length; f++) {
          if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
            return true;
          }
        }
        return false;
      });
      this.setState({data: searchdata});
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
                  : `Wyszukaj $(this.state.count} rekordów...`
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
                <Form
                  ref="form"
                  fields={this.props.schema} />
              </Dialog>
            : null}
        </div>
      );
    }
  }
  
  Whinepad.propTypes = {
    schema: PropTypes.arrayOf(
      PropTypes.object
    ),
    initialData: PropTypes.arrayOf(
      PropTypes.object
    ),
  };
  
  export default Whinepad