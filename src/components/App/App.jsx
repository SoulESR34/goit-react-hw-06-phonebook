import React from 'react';
import NewContact from '../NewContact/NewContact';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { nanoid } from 'nanoid';
import { NewContactContainer, Container } from './App.style';
import { addContacts, deleteContact } from '../../redux/slices/contactsSlice';
import { setFilterByName } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(s => s.contacts);
  const dispatch = useDispatch();
  const  { filterByName: filterStatus }  = useSelector(s => s.filter);

  const createNewContact = (e, ContactsList) => {
    e.preventDefault();
    const nameContact = e.target.name.value;
    const numberContact = e.target.numberPhone.value;
    const newContact = {
      id: nanoid(),
      name: nameContact,
      number: numberContact,
    };
    const isExist = ContactsList.some(c => c.name === nameContact);

    !isExist
      ? dispatch(addContacts(newContact))
      : alert(`${nameContact} is already in contacts`);
  };

  const searchContact = e => {
    dispatch(setFilterByName(e.target.value));
  };

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };


  return (
    <main>
      <Container>
        <NewContactContainer>
          <h2>Phonebook</h2>
          <NewContact createContact={createNewContact} contactList={contacts} />
        </NewContactContainer>

        <h2>Contacts</h2>
        <ContactFilter validator={searchContact} />
        <ContactsList
          contacts={contacts}
          search={filterStatus}
          delContact={delContact}
        />
      </Container>
    </main>
  );
};
