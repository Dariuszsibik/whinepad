import PropTypes from 'prop-types'; 
import React from 'react';

const Actions = props =>
    <div className="Actions">
        <span tabIndex="0" 
            className="ActionsInfo" 
            title="Więcej info"
            onClick={props.onAction.bind(null, 'info')}>&#8505;</span>
        <span 
            tabIndex="0"
            className="ActionsEdit"
            title="Edycja"
            onClick={props.onAction.bind(null, 'edit')}>&#10000;</span>
        <span 
            tabIndex="0"
            className="ActionsDelete"
            title="usuń"
            onClick={props.onAction.bind(null, 'delete')}>x</span>
    </div>

    Actions.propTypes = {
        onActions: PropTypes.func,
    };

    Actions.defaultProps = {
        onActions: () => {},
    };

    export default Actions