import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsActions } from '../../redux/contacts/index';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = e =>
    dispatch(contactsActions.changeFilter(e.target.value));

  const onBlurHandler = () => dispatch(contactsActions.changeFilter(''));

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </Label>
    </>
  );
}
