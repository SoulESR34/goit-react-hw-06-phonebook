import { ContactsWrapper } from './ContactsList.style';
import PropTypes from 'prop-types';
import { ContactsCard } from 'components/ContactsCard/ContactsCard';

export const ContactsList = ({ contacts, search, delContact }) => {
  return (
    <div>
      <ContactsWrapper>
        {contacts
          .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
          .map(f => (
            <ContactsCard key={f.id} delContact={delContact} {...f} />
          ))}
      </ContactsWrapper>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  search: PropTypes.string,
  delContact: PropTypes.func,
};
