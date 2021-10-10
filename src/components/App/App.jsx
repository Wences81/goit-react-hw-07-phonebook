import ContactForm from '../Form/ContactForm';
import ContactList from '../List/ContactList';
import Filter from '../Filter/Filter';
import { Title } from './App.styled';

export default function App() {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </div>
  );
}
