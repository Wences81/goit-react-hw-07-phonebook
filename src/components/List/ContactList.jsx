import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';

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
          <Button
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
