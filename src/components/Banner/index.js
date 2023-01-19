import styles from "./Banner.module.css";

export default function Banner({ imagem }) {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url("/imagens/banner-${imagem}.png")`,
      }}
    ></div>
  );
}


