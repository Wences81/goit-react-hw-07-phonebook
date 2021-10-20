import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contacts/index';
import { Button, List, Name, Item } from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>
            {name} : {number}
          </Name>
          <Button
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
