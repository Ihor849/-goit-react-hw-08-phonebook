import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import {ContainerPhonebook} from './PhonebookPage.styled';

import { Section } from 'components/Section/Section';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContactsList } from 'redux/selectors';

const PhonebookPage = () => {
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
    
  }, [ dispatch])

  return (
    <ContainerPhonebook>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts ">
        <>
            {contacts.length > 4 && <ContactFilter />}
            {contacts.length !== 0 && <ContactsList />} 
          </>
          <ContactFilter />
          <ContactsList />
      </Section>
    </ContainerPhonebook>
  );
};
export default PhonebookPage;
