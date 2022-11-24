import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';
import s from './Register.module.css';
const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password, name } = e.target.elements;
    if (!email.value || !password.value || !name.value) return;
    dispatch(
      registration({
        email: email.value.trim(),
        name: name.value.trim(),
        password: password.value.trim(),
      })
    );
    e.target.reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={s.label}>
        Your name
        <input className={s.input} type="text" name="name" required />
      </label>
      <label className={s.label}>
        Email
        <input className={s.input} type="email" name="email" required />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="not less than 7 symbols"
          required
        />
      </label>
      <button className={s['button-30']} type="submit">
        Register
      </button>
    </form>
  );
};
export default Register;
