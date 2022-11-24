import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { Link } from './Navigation.styled';
export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};
