import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts-actions.js';
import { getVisibleContacts } from '../../redux/contacts-selectors.js';

import { Button, List, Name, Item } from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>
            {name} : {number}
          </Name>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
