import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import NaoEncontrado from "pages/NaoEncontrado";
import { useEffect, useState } from "react";

export default function Player() {
  const [videos, setVideos] = useState([]);

  const parametros = useParams();
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/rhpessoa/api-videos/Videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, [parametros.id]);
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });
  if (!video) return <NaoEncontrado />;
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.iframe}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
