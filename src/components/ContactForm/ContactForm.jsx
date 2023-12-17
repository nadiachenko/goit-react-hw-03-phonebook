import React, { Component } from "react"
import css from './contform.module.css'

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
  recordName = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, });
  }

  addContact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number)
    this.setState({ name: '', number: '' });
  };

  render() {
    return (<div><h2>Phonebook</h2><form onSubmit={this.addContact} >
      <label className={css.title}> Contact Name
      <input type="text" name="name" onChange={this.recordName} value={this.state.name} required /> </label>
      <label className={css.title}> Contact Phone  <input type="tel" name="number" onChange={this.recordName} value={this.state.number} required />
      </label> <button className={css.sbmbtn} type="submit" >Add Contact</button>
    </form></div>
    );
  };
};