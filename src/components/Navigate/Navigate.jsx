import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './Navigate.module.css';

const Navigate = () => {
  return (
    <nav className={css.list}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/country"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        SearchCountry
      </NavLink>
    </nav>
  );
};

export default Navigate;
