import styles from "./Rodape.module.css";

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <address className={styles.address}>Desenvolvido por Alura.</address>
        </footer>
    )
}