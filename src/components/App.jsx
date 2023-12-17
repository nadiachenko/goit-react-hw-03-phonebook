
import { Component } from "react"
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import shortid from 'shortid'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    console.log(contacts)
    if (parsedContacts) { this.setState({ contacts: parsedContacts }) }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    !this.state.contacts.some(contact1 => contact1.name === contact.name) ?
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      })) : alert(contact.name + "  is already exist")
  }


  searchName = (e) => {
    this.setState({ filter: e.currentTarget.value, });
  }

  filterContacts = () => {
    const mini = this.state.filter.toLowerCase();
    return this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(mini));
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.searchName} />
        <ContactList contactsList={filteredContacts} deleteContact={this.deleteContact} />
      </>
    );
  }
};
