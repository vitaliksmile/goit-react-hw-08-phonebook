import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelector';
import { logOut } from 'redux/auth/operations';
import s from './UserMenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <div className={s.box}>
      <p className={s.p}>{user.name}</p>
      <button
        className={s['button-30']}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};
