import contactsActions from '../../redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
          onBlur={e =>
            dispatch(contactsActions.changeFilter((e.target.value = '')))
          }
        />
      </Label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
