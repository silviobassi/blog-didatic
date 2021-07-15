import P from 'prop-types';
import './styles.css';

export const InputText = ({ onChange }) => <input className="input-search" type="search" onChange={onChange} />;
InputText.propTypes = {
  onChange: P.func.isRequired,
};
