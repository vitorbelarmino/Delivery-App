import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      label = '',
      name = '',
      onChange,
      value = '',
      id = '',
      options = '',
      className = '',
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
        </label>
        <select
          name={ name }
          data-testid={ id }
          id={ name }
          required
          onChange={ onChange }
          value={ value }
          className={ className }
        >
          {
            options.map(({ id: sellerId, name: nameFull }, index) => (
              <option
                key={ index }
                data-testid={ `${sellerId}-option` }
              >
                { nameFull }

              </option>
            ))
          }
        </select>
      </div>

    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

Select.defaultProps = {
  label: '',
  name: '',
  id: '',
  className: '',
  value: '',
  options: '',
};

export default Select;
