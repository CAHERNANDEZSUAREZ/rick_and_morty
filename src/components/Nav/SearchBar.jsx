import styles from "./search.module.css";
export default function SearchBar(props) {
  return (
    <div>
        <input type="search" className={styles.inputStyle} />
        <button
          onClick={() => window.alert("se cerró la tarjeta")}
          className={styles.buttonStyle}
        >
          Agregar
        </button>
       </div>
  );
}
