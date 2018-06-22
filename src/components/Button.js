import classNames from 'classnames';
import PropTypes from 'prop-types'; 
import React from 'react';

const Button = props => 
    props.href
        ?<a {...props} className={classNames('Button', props.className)} > test-must-have-content-in-component-button </a>
        : <button {...props} className={classNames('Button', props.className)} />


Button.propTypes = {
    href: PropTypes.string,
};

export default Button