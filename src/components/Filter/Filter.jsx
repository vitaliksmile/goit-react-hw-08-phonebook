import { filterContact } from '../../redux/contactsSlice/contactsSlice';
import { getContactsFilter } from '../../redux/contactsSlice/contactsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
const Filter = () => {
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  return (
    <input
      className={s.input}
      placeholder="Find a contact"
      onChange={e => dispatch(filterContact(e.currentTarget.value))}
      type="text"
      name="filter"
      value={filter}
    />
  );
};

export default Filter;
