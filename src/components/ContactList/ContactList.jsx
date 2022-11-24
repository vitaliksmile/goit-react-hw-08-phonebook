import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getContactsFilter,
} from '../../redux/contactsSlice/contactsSelectors';
import { removeContact } from 'redux/contactsSlice/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContacts);
  const filterContact = () => {
    const filterName = filter?.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterName)
    );
  };
  const filterContactList = filterContact();
  return (
    <ul className={s.ul}>
      {filterContactList.map(({ name, number, id }) => {
        return (
          <li className={s.li} key={id}>
            {name}: {number}
            <button
              className={s['button-30']}
              type="button"
              onClick={() => {
                dispatch(removeContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
