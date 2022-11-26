import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, onClickDelete }) => {
  return (
    <li key={id}>
      <span>Name:{name}</span>
      <span>Number:{number}</span>
      <button className="" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
