import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css"
export default function Nav(props) {
  return (
    <nav className={styles.contenedor}>
      <SearchBar />
    </nav>
  );
}
