import React from 'react';
import { Contact } from './ContactsCard.styled';

export const ContactsCard = ({id, name, number, delContact}) => {
    const handleDelete = () =>{
        delContact(id)
    } 
    return (
    <Contact>
      {name}: {number}
      <button onClick={() => handleDelete()}>Delete</button>
    </Contact>
  );
};
