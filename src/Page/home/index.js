import React from "react";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Carrossel from "../../components/carrossel/index";
import Figures from "../../components/figures/index";
const Home = () => {
  return (
    <>
      <Header />
      Pagina - Home
      <Carrossel />
      <br />
      <Figures />
      <br />
      <Footer />
    </>
  );
};
export default Home;
