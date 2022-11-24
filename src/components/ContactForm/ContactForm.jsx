import s from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice/contactsSelectors';
import { addContact } from 'redux/contactsSlice/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(
      contact =>
        contact.name.trim().toLowerCase() === name.trim().toLowerCase() ||
        contact.number === number
    )
      ? alert(`name: ${name}  or number: ${number} is already in contacts `)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="name">
        Name
        <input
          placeholder="Name"
          className={s.input}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label className={s.label} htmlFor="number">
        Number
        <input
          placeholder="Number"
          className={s.input}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>

      <button className={s['button-30']} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
