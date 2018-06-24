import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

describe('Możemy wyrenderować przycisk', () => {
  it('którego tekst zmienia się po kliknięciu', () => {

    const button = TestUtils.renderIntoDocument(
      <button
        onClick={ev => ev.target.innerHTML = 'Cześć'}>
        Witaj
      </button>
    );

    expect(ReactDOM.findDOMNode(button).textContent).toEqual('Witaj');
    TestUtils.Simulate.click(button);
    expect(ReactDOM.findDOMNode(button).textContent).toEqual('Cześć');
  });
});
