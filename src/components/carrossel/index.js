import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
const carrossel = () => {
  return (
    <Carousel>
      <Carousel.Item inteval={1500}>
        <img
          src={banner1}
          class="rounded"
          alt="EM TESTE"
          style={{ width: "100%" }}
          className="d-block w=85"
        />
      </Carousel.Item>
      <Carousel.Item inteval={1500}>
        <img
          src={banner2}
          class="rounded"
          alt="EM TESTE"
          style={{ width: "100%" }}
          className="d-block w=85"
        />
      </Carousel.Item>
      <Carousel.Item inteval={1500}>
        <img
          src={banner3}
          class="rounded"
          alt="EM TESTE"
          style={{ width: "100%" }}
          className="d-block w=85"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default carrossel;
