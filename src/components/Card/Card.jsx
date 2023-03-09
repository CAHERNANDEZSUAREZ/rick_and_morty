import styles from "./Card.module.css"

export default function Card({name,species,gender,image,onClose}) {
   
   return (
      <div className={styles.movieCard}>
         <button onClick={onClose} className={styles.click}>X</button>
         <h2>Name:{name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img width={230}
         src={image} className={styles.movieImage} alt="" />
        
      </div>
   );
}
