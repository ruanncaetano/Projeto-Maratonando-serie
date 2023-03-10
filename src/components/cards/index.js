import React from "react-bootstrap";
import { Card, Carousel, Jumbotron } from "react-bootstrap";
import eu from "../../assets/eu.png";
import eu2 from "../../assets/eu2.jpeg";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
const Cards = () => {
  return (
    <Jumbotron>
      <Card.Title>
        <h1>Sobre o autor</h1>
      </Card.Title>
      <Carousel>
        <Carousel.Item inteval={1500}>
          <div class="d-flex justify-content-center">
            <img
              src={eu}
              class="rounded"
              alt="EM TESTE"
              style={{ width: "480px" }}
              className="center-block"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item inteval={1500}>
          <div class="d-flex justify-content-center">
            <img
              src={eu2}
              class="rounded"
              alt="EM TESTE"
              style={{ width: "480px" }}
              className="center-block"
            />
          </div>
        </Carousel.Item>
      </Carousel>

      <Card.Text>
        <br />
        <p>
          <b>Nome:</b> Ruan Costa Caetano Da Silva
        </p>
        <p>
          <b>Idade:</b> 16 Anos
        </p>
        <p>
          <b>Cidade:</b> Presidente Venceslau
        </p>
        <p>
          <b>Estado:</b> São Paulo
        </p>
        <p>
          <b>País:</b> Brasil
        </p>
        <p>
          <b>Curso:</b> 2° ETIM Técnico em informática integrado ao ensino médio
        </p>
        <IoLogoInstagram size={20} />{" "}
        <a
          style={{ all: "unset", cursor: "pointer" }}
          href="https://www.instagram.com/ruan__caetano/ "
          target="_blank"
        >
          Instagram
        </a>
        <br />
        <br />
        <h2>
          <i style={{ fontSize: "20px" }}>UMA QUEBRAÇÃO DE TABU.</i>
        </h2>
      </Card.Text>
    </Jumbotron>
  );
};
export default Cards;
