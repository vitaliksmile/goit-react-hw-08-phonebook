import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import s from './LogIn.module.css';
const LogIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
      })
    );
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="on">
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
        Log In
      </button>
    </form>
  );
};

export default LogIn;
