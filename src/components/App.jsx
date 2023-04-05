import { Container, Title, ContactList } from './App.styled';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

    componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = newContact => {
    const newContactNormalize = newContact.name.toLowerCase();
    const savedContactsNormalise = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    savedContactsNormalise.includes(newContactNormalize)
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  findByFilter = filterValue => this.setState({ filter: filterValue });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <ContactsForm addNewContact={this.addNewContact} state={this.state} />
        <Title>Contacts</Title>
        <Filter findByFilter={this.findByFilter} value={this.state.filter} />
        <ContactList>
          <Contacts
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </ContactList>
      </Container>
    );
  }
}
