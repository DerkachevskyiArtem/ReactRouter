import { NavLink } from 'react-router';
import s from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <ul className={s.navigation}>
        <li className={s.navigationItem}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Home
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            About
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
