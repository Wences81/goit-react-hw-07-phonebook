import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts, contactsOperations } from 'redux/contacts';
import { Button, List, Name, Item } from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  useEffect(() => dispatch(contactsOperations.fethContacts()), [dispatch]);

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
