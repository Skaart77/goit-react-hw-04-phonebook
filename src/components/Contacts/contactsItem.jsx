import PropTypes from 'prop-types';
import { Button } from './contacts.styled';

export const ContactsItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <li key={id}>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </li>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
