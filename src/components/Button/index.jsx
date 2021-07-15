import P from 'prop-types';
import './style.css';

export const Button = ({ onClick, text, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: P.func.isRequired,
  text: P.string.isRequired,
  disabled: P.bool,
};
