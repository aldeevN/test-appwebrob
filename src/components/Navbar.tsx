import { Link } from "react-scroll";
import styles from "../styles/Navbar.module.scss";
import Logo from "./Logo";


const navigation = [
  { title: 'About', path: 'about' },
  { title: 'Programs', path: 'programs' },
  { title: 'Steps', path: 'steps' },
  { title: 'Questions', path: 'questions' },
  { title: 'Contacts', path: 'contacts' },
];


const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.links}>
          {navigation.map(({ title, path }) => (
            <Link activeClass="active" smooth spy key={title} to={path}>
              <div>{title}</div>
            </Link>
          ))}
        </div>
      </nav>
    </header>

  );
};

export default Navbar;
