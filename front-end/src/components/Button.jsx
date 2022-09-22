import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { typeButton = 'button', label = '', onClick, disabled = false,
      id = '', value = '', className = '', img = '' } = this.props;
    return (
      <button
        type={ typeButton === ' ' ? 'button' : 'submit' }
        onClick={ onClick }
        disabled={ disabled }
        value={ value }
        className={ className }
        data-testid={ id }
        src={ img }
      >
        { label }
        {img
         && (
           <img
             src={ img }
             alt={ value }
           />
         )}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  typeButton: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  img: PropTypes.string,
};

Button.defaultProps = {
  typeButton: '',
  id: '',
  value: '',
  className: '',
  disabled: false,
  img: '',
};
