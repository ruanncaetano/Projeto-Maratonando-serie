import React from "react";
import { Figures, Jumbotron, Accordion, Card, Button } from "react-bootstrap";
import {} from "react-router-dom";
import dina from "../../assets/dina.jpg";
import pose from "../../assets/pose.jpg";
import loki from "../../assets/loki.jpg";
import wanda from "../../assets/wanda.jpg";
import grey from "../../assets/grey.png";
import desaventura from "../../assets/desaventura.jpg";
const Figuras = () => {
  return (
    <>
      {" "}
      <Jumbotron>
        <img
          src={dina}
          alt="aaaa"
          style={{ float: "left", paddingRight: "10px", width: "200px" }}
        />
        <h1>Dinastia</h1>
        <p>
          <b>Personagem:</b> Elizabeth Gillies (Fallon Carrington), Grant Show
          (Black Carrington), James Mackay (Steven Carrington), Alan Dale
          (Joseph Anders), Sam Adegoke (Jeff Colby ), Robert Christopher Riley
          (Michael Culhane n) e Rafael de la Fuente (Sammy Jo).
        </p>
        <p>
          <b>Produção:</b> Brandi Bradburn, Adrienne McNally, Brandon Lott, J.J.
          Geiger,Jennifer Hatton, Ben Northenor
        </p>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ver Mais!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <b>Resumo:</b>
                <p>
                  Dynaty ou Dinastia, é uma série norte-americana transmitida
                  pela CW, a série é uma releitura da novela transmitida em
                  1981, o programa atual teve seu início em 2017, no momento
                  conta com 4 temporadas de aproximadamente 20 episódios.
                </p>
                <p>
                  A série conta a história da família mais rica da América, os
                  Carrington, o drama da primeira temporada conta com o
                  desentendimento de Fallon Carrignton filha do Milionário Black
                  Carrington com sua nova madrasta Cristal que vai tentar entrar
                  para a família e a alta sociedade da Atlanta.
                </p>
                A Primeira temporada contara com muito Drama, Morte e sedução,
                ao fim dela, nos deparemos com mortes inesperadas e algumas
                premeditadas, casais formados a partir de mentiras, traições
                familiares e negociações multimilionárias.
                <p>
                  Assim continua as próximas temporadas com o surgimento de
                  novos filhos, mentiras do passado voltando à tona, planos para
                  destruir seus rivais e para que a Dinastia Carrington continue
                  a ser a mais poderosa.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
      <Jumbotron>
        <img
          src={pose}
          alt="aaaa"
          style={{ float: "left", paddingRight: "10px", width: "200px" }}
        />
        <h1>Pose</h1>
        <p>
          <b>Personagens: </b>
          Blanca (MJ Rodriguez), Elektra (Dominique Jackson) , Pray Tell (Billy
          Porter), Angel Evangelista (Indya Moore), Damon (Ryan Jamaal Swain)
        </p>

        <p>
          <b>Produtores: </b>
          Ryan Murphy, Brad Falchuk, Steven Canals
        </p>

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ver Mais!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  <b>Resumo</b>
                  <p>
                    Pose é uma série com temática LGBT+ ambientada na Nova
                    Iorque dos anos 80, a série irá trazer a história da
                    transexual Blanca Evangelista e da comunidade da época. A
                    produção aborda vários assuntos da época como a crescente
                    contaminação pela AIDS, as histórias dos gays e travestis.
                  </p>
                  <p>
                    Blanca após se sentir humilhada por Elektra decide formar
                    sua própria “casa”, nos anos 80 as “casas” eram formadas por
                    grupos de jovens LGBT+ que eram expulsos de casa, esses
                    grupos participavam de bailes, os bailes eram um refúgio
                    para a comunidade onde podiam expressar toda sua arte, os
                    eventos eram repletos de brilho, gloria e poder.
                  </p>
                  <p>
                    Ao inicias sua jornada em busca do pódio dos luxuosos bailes
                    ela ajuda os esquecidos da sociedade, Angel Evangelista uma
                    trans prostituta, Damon um jovem gay bailarino e muito
                    promissor, assim ela forma sua casa.{" "}
                  </p>
                  <p>
                    A série conta com um grande peso social, levanta questões
                    importantes da época que inda são pauta de discussão.{" "}
                  </p>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
      <Jumbotron>
        <img
          src={loki}
          alt="aaaa"
          style={{ float: "left", paddingRight: "10px", width: "180px" }}
        />
        <h1>Loki</h1>
        <p>
          <b>Personagens: </b> Loki (Tom Hiddleston), Sylvie (Sophia Di
          Martino), Ravonna Renslayer,(Gugu Mbatha-Raw), Caçadora B-15 (Wunmi
          Mosaku), Mobius M. Mobius (Owen Wilson).
        </p>
        <p>
          <b>Produção: </b> Kevin Feige, Kate Herron.
        </p>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ver Mais!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  <b>Resumo:</b>
                </p>
                <p>
                  Loki é a segunda série lançada pelo Disney+ no ano de 2021, o
                  seriado trará grandes mudanças do UCM (Universo
                  Cinematográfico da Marvel), a nova fase dos estúdios Marvel
                  trará o multiverso.
                </p>
                <p>
                  O vilão mais queridinho da Mavel estreou sua série, mostrando
                  seu lado mais humano, após o roubo do tesseract, loki viola as
                  leis da AVT (Autoridade de Variância Temporal), a organização
                  que controla a linha do tempo sagrada, fazendo assim com que
                  ele seja levado a julgamento perante os guardiões do tempo, o
                  vilão tinha uma escolha ser apagado da existência ou ajudar
                  AVT na capturar uma versão variante de si mesmo, ao embarcar
                  na aventura ele irá descobrir as mentiras da tão sagrada linha
                  do tempo, e ao fim da primeira temporada junto a suas outras
                  versões derrotam Alioth, o guardião do templo de Kang o
                  verdadeiro vilão da primeira temporada, dessa forma ele e
                  Sylvie sua variante mata Kang fazendo com que o multiverso
                  seja aberto.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
      <Jumbotron>
        <img
          src={wanda}
          alt="aaaa"
          style={{ float: "left", paddingRight: "10px", width: "180px" }}
        />
        <h1> WandaVision </h1>
        <p>
          <b>Personagens: </b>
          Wanda Maximoff / Feiticeira Escarlate (Elizabeth Olsen), Visão (Paul
          Bettany), Agatha Harkness (Kathryn Hahn), Monica Rambeau (Teyonah
          Parris).
        </p>
        <p>
          <b>Produção: </b> Matt Shakman, Chuck Hayward
        </p>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ver Mais!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  <b>Resumo: </b>
                </p>
                <p>
                  Wandavison é a primeira série da nova fase da Marvel, a série
                  mostra como Wanda fica pós-guerra Ultimato, a série remete aos
                  programas televisivos dos anos 50/60.{" "}
                </p>
                <p>
                  Após a morte de Visão, Wanda vai visitar Westview, cidade onde
                  moraria com seu futuro marido, com sua chegada várias memórias
                  vêm átona fazendo com que ela tenha um surto de poder, assim
                  dominando todas as mentes da pequena cidade a transformando em
                  seu refúgio onde poderia criar seu futuro.
                </p>
                <p>
                  Após criar o Visão a partir do poder grandioso da joia da
                  mente a personagem cria seus filhos, com o passar dos
                  episódios, Wanda começa a perder o controle de seus poderes
                  assim a verdadeira vilã começa a atacar, Agatha Harkness, uma
                  antiga bruxa que tentara drenar os poderes de Wanda.
                </p>
                <p>
                  Harkness invade a mente de Wanda na tentativa de desvendar de
                  onde surgiu os poderes da jovem fazendo assim com que ela
                  reviva as suas maiores perdas, com as tentativas de
                  enfraquecer Wanda, Harkness apenas a torna mais forte, com
                  isso ela desperta a Feiticeira Escarlate um dos seres, mas
                  poderosos do universo Marvel.{" "}
                </p>
                <p>
                  “A Feiticeira Escarlate não nasce, ela é forjada. Ela não tem
                  coven, não precisa de encantamento. Seu poder excede o do Mago
                  Supremo. É o seu destino destruir o mundo” a frase dita pela
                  vilã da série deixa teoria no ar Wanda seria a vilã no próximo
                  filme do Doutro Estranho? Fica a dúvida.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
      <Jumbotron>
        <img
          src={grey}
          alt="aaaa"
          style={{ float: "left", paddingRight: "10px", width: "180px" }}
        />
        <h1>Grey’s Anatomy</h1>
        <p>
          <b>Personagens:</b>
          Meredith Grey (Ellen Pompeo), Cristina Yang (Sandra Oh), Miranda
          Bailey (Chandra Wilson), Alex Karev (Justin Chambers), Izzie Stevens
          (Katherine Heigl).
        </p>
        <p>
          <b>Producão:</b>
          Shonda Rhimes
        </p>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ver Mais!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Uma das séries mais longa já existente contendo 17 temporadas
                  a história contara a vida pessoal e profissional de internos
                  cirúrgicos e seus supervisores no Hospital Memorial Graceron.
                </p>
                <p>
                  A protagonista da primeira temporada é Meredith e quatro
                  outras estagiárias, mas conforme alguns veteranos se despedem
                  de vez em quando, novos rostos se juntam à equipe médica, e o
                  elenco será atualizado a cada ano. Eles encontram apoio,
                  conforto, amizade e até amor um no outro. Juntos, eles
                  trabalharam para reconciliar o drama profissional e o pessoal,
                  e descobriram que os dois podem e irão se fundir totalmente.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
      <Jumbotron>
        <img
          src={desaventura}
          alt="aaaa"
          style={{ float: "left", paddingRight: "10px", width: "170px" }}
        />
        <h1>Desventuras em Série</h1>
        <p>
          <b>Personagens:</b>
        </p>
        <p>
          Violet Baudelaire (Malina Weissman), Klaus Baudelaire (Louis Hynes),
          Sunny Baudelaire (Presley Smith), Conde Olaf (Neil Patrick Harris),
          Lemony Snicke(Patrick Warburton).
        </p>
        <p>
          <b>Produção: </b>
          Barry Sonnenfeld, Cindy Holland
        </p>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ver Mais!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  <b>Resumo </b>
                </p>
                <p>
                  A série é uma releitura de uma sequência de 13 livros escritos
                  por Lemony Snicke, o filme lançado em 2004 que foi indicado ao
                  oscar em vários quesitos em seguida a série.{" "}
                </p>
                <p>
                  A série lançada em 2017 conta com 3 incríveis temporadas de
                  visual único, após receberem a triste notícia de que sua casa
                  avia pegado fogo e seus pais estavam mortos os irmãos Violet,
                  Klaus e Sunny Baudelaire são levados para os cuidados de seu
                  tio Conde Olaf que tentara tomar a fortuna dos pobres órfãos,
                  logo no começo os irmãos irão fugir em busca de respostas, e
                  Olaf não irá esquecer tão fácil os Baudalarie já que essa
                  história vem de muitos anos no passado.{" "}
                </p>
                <p>
                  Ao decorrer das três temporadas serão mostrados os ministérios
                  da grande organização secreta C.S.C., irão descobrir o passado
                  secreto dos seus pais alguns dos outros membros, Conde Olaf
                  mata todos que estão em seu caminho para a conquista da
                  fortuna, ele criara disfarces duvidosos para atacar os órfãos,
                  e planos mirabolantes. Ao fim das três bem desenvolvidas
                  temporadas os Baudelaire vão descobrir os mistérios que
                  cercavam sua família.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    </>
  );
};
export default Figuras;
