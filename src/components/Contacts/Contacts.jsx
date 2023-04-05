import { Contact } from 'components/Contact/Contact';
import Proptypes from 'prop-types';

export const Contacts = ({ contacts, deleteContact }) => {
  return contacts.map(contact => (
    <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
  ));
};
Contacts.propTypes = {
  contacts: Proptypes.arrayOf(Proptypes.exact({ id: Proptypes.string, name: Proptypes.string, number: Proptypes.string })).isRequired,
  deleteContact:Proptypes.func.isRequired
}
