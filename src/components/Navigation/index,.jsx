import { NavLink } from 'react-router';
import s from './Navigation.module.scss';

const setActive = ({ isActive }) => (isActive ? s.activeLink : s.link)

function Navigation() {
  return (
    <nav>
      <ul className={s.navigation}>
        <li className={s.navigationItem}>
          <NavLink
            to="/"
            className={setActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink
            to="/about"
            className={setActive}
          >
            About
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink
            to="/contact"
            className={setActive}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
