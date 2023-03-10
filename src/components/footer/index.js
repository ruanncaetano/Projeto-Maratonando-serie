import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoLogoInstagram } from "react-icons/io5";
import { FiPhoneOutgoing } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

const footer = () => {
  return (
    <div style={{ color: "white", background: "rgb(14,80,64)" }}>
      <Row>
        <Col>Para Contato</Col>
        <Col>
          Redes Sociais
          <br />
          <p>
            <BiMailSend size={20} />{" "}
            <a style={{ all: "unset", cursor: "pointer" }} href=" ">
              Contate-nos
            </a>
          </p>
          <p>
            <IoLogoInstagram size={20} />{" "}
            <a
              style={{ all: "unset", cursor: "pointer" }}
              href="https://www.instagram.com/maratonandoserie3/ "
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default footer;
