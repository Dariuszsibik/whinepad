jest
  .dontMock('../components/Button')
  .dontMock('classnames')
;

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const Button = require('../components/Button').default;

describe('Renderowanie komponentów Button', () => {
  it('renderuje <a> lub <button>', () => {
    const button = TestUtils.renderIntoDocument(
      <div>
        <Button>
          Witaj
        </Button>
      </div>
    );
    expect(ReactDOM.findDOMNode(button).children[0].nodeName).toEqual('BUTTON');
    
    const a = TestUtils.renderIntoDocument(
      <div>
        <Button href="#">
          Witaj
        </Button>
      </div>
    );
    expect(ReactDOM.findDOMNode(a).children[0].nodeName).toEqual('A');
  });
  
  it('umożliwia stosowanie niestandardowych nazw klas CSS', () => {
    const button = TestUtils.renderIntoDocument(
      <div><Button className="good bye">Witaj</Button></div>
    );
    const buttonNode = ReactDOM.findDOMNode(button).children[0];
    expect(buttonNode.getAttribute('class')).toEqual('Button good bye');
  });
  
});
