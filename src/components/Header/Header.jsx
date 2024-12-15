import { NavLink } from "react-router-dom";
import styles from "../../styles/header.module.css";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {title}
          </NavLink>

          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.inactiveLink
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
