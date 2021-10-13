import { changeFilter } from '../../redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    dispatch(changeFilter(e.target.value));
  };

  const onBlurHandler = () => {
    dispatch(changeFilter(''));
  };

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
