import { useFavoritoContext } from "contextos/Favoritos";
import styles from "./Card.module.css";
import iconeLike from "./iconeLike.png";
import iconeDislike from "./iconeDislike.png";
import { Link } from "react-router-dom";
export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const Icone = ehFavorito ? iconeLike : iconeDislike;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img className={styles.capa} alt={titulo} src={capa}></img>
        <h2 className={styles.titulo}>{titulo}</h2>
      </Link>
      <img
        src={Icone}
        alt="Favoritar filme"
        className={styles.icone}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      ></img>
    </div>
  );
}
