import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";
import PropTypes from "prop-types";

const Header = ({ title, aboutMe }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
          aria-label="Go to home"
        >
          {title}
        </NavLink>

        <div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
            aria-label="Go to about"
          >
            {aboutMe}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired,
};

export default Header;
