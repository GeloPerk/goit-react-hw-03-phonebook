import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <Item>
      {name} {number}
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
