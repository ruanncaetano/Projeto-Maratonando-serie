import react from "react";
import { Jumbotron as RBjumbotron } from "react-bootstrap";
import banner4 from "../../assets/banner4.png";
const Jumbotron = () => {
  return (
    <RBjumbotron>
      <h1>A história das Séries</h1>
      <img
        src={banner4}
        alt="aaaa"
        style={{ float: "left", paddingRight: "10px", width: "200px" }}
      />
      A captura da “imagem-movimento” foi possível a partir de 1889 com a
      criação do cinetoscópio por William Dickson, assistente do cientista e
      inventor americano Thomas Edison.
      <p>
        {" "}
        Os filmes em série chegaram, por volta de 1912, aos Estados Unidos da
        América, com What Happened to Mary?, co-produção do Edison Studios
        Company e da revista The Ladies World, primeiro seriado estadunidense.
        <p>
          Os seriados eram comumente acompanhados, enquanto veiculavam nos
          cinemas, pela mesma história em capítulos nos jornais. Por volta dos
          anos 1910, tinha-se o hábito, nos cinemas populares dos Estados
          Unidos, de passar os filmes importantes por partes de um rolo, o que
          pode ter incentivado o aparecimento do seriado.
        </p>
      </p>{" "}
      <p>
        The Adventures of Kathlyn é considerado o primeiro seriado lançado
        em1913. Os seriados se tornaram muito populares entre as crianças e os
        jovens da primeira metade do século XX, e geralmente as sessões de
        cinema, inclusive no Brasil, até os anos 60, eram precedidas por um
        episódio de seriado, como eram conhecidos então.
        <p>
          {" "}
          Posteriormente, foram adquiridos pelos canais de TV, sendo
          apresentados então em episódios semanais ou diários. Grande parte era
          de western, mas havia os mais diversos gêneros: dramas, ficção
          científica, espionagem, aventuras na selva, além de adaptações de
          livros. Alguns chegaram a ser bastante dispendiosos, como foi o caso
          de Flash Gordon, que pode ser considerado uma das maiores produções de
          seu tempo.
        </p>
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </RBjumbotron>
  );
};

export default Jumbotron;
