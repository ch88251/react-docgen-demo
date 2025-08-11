import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable button component.
 *
 * @component
 * @example
 * const label = 'Click me'
 * return (
 *   <MyButton label={label} onClick={() => alert('Clicked')} />
 * )
 */
function MyButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

MyButton.propTypes = {
  /** The label to show on the button */
  label: PropTypes.string.isRequired,

  /** Function to call on button click */
  onClick: PropTypes.func
};

export default MyButton;

