import React, { Component } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };
  deleteContact = iD => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== iD),
    }));
  };

  onFilterChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const options = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filtered={filter} filterChange={this.onFilterChange}></Filter>
        {filter && (
          <ContactList
            options={options}
            onClickDelete={this.deleteContact}
          ></ContactList>
        )}

        <GlobalStyle></GlobalStyle>
      </>
    );
  }
}
