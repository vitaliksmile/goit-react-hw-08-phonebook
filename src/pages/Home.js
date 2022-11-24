import logo from 'components/logo/Contacts Icon.png';
import s from './Home.module.css';
const Home = () => {
  return (
    <div className={s.box}>
      <h1 className={s.h1}>Your personal phonebook</h1>
      <img className={s.img} src={logo} alt="Logo" />
    </div>
  );
};
export default Home;
