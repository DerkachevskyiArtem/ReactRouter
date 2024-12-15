// import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/index,';
import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <Navigation/>
    </header>
  );
}

export default Header;
