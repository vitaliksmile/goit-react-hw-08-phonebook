import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSelector';
import { getIsContacts } from 'redux/contactsSlice/contactsSelectors';
import { fetchContact } from 'redux/contactsSlice/operations';
import s from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const contatsList = useSelector(getIsContacts);
  const token = useSelector(getToken);

  useEffect(() => {
    token && dispatch(fetchContact());
  }, [dispatch, token]);

  return (
    token && (
      <div className={s.box}>
        <h2 className={s.text}>Phonebook</h2>
        <ContactForm />
        {contatsList && <h2 className={s.text}>Contacts</h2>}
        {contatsList && <Filter />}
        {contatsList && <ContactList />}
      </div>
    )
  );
};
export default Contacts;
