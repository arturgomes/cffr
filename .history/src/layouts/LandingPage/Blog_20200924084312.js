import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";

import styled from 'styled-components';


import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
//Material.ui


import AnchorLink from "react-anchor-link-smooth-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import slogan from "./images/sem_slogan_fundo_claro@4x.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/fontawesome-all.css";
import "./css/fontawesome.css";
import "./css/swiper.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import Menu from "../../components/LandingPage/Menu";

// import Header from "../../components/Header/Header.js";
// import Button from "../../components/CustomButtons/Button.js";
// import styles from '../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle'
// import styles1 from './css/styles.css'
import Post from '../../components/Post'
// import Parallax from "../../components/Parallax/Parallax.js";
// import {
//   // login, getId, getUser, 
//   isAuthenticated, getTu
// } from '../../services/auth';
// import api from '../../services/api';

// const useStyles = makeStyles(styles);
// const classes = makeStyles(styles1);
// const classes = useStyles();
const Spacing = styled.div`
    margin-top: 30px;
`
const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`

const Primary = styled.div`
    max-width: 650px;
    margin: 0 auto;
    margin-top:30px
    margin-bottom:20px;
    font-family: 'Sen', sans-serif;
`
const newpost = `<Spacing><h5>Medir a experiência do cliente e do funcionário é um processo contínuo, não um evento</h5>

As empresas não existem sem clientes e funcionários, embora poucas empresas tenham um processo sistemático em vigor para medir e melhorar a experiência de clientes e funcionários.

No entanto, todos nós (ou a maioria de nós) seguimos nossas finanças fielmente ao mês, semana ou mesmo dia. A experiência do cliente deve ser medida da mesma maneira - continuamente. E seu feedback deve estar sempre disponível em tempo real. O feedback dos funcionários deve ser coletado no mínimo trimestralmente.

Afinal, não há dinheiro sem clientes e funcionários!
</Spacing>
<Spacing>
<h5>Comece seu programa de feedback de experiência do cliente com seu ponto de contato mais importante</h5>

Você provavelmente interage com os clientes de várias maneiras: site, aplicativo, centro de contato, localização, serviços de campo, etc.

Comece seu programa de medição da experiência do cliente com o ponto de contato de que, se não for bem, você perderá o cliente.

Para alguns clientes, essa será uma visita de um cliente a um local, para outros será uma visita a um site. Não importa o que seja, peça feedback imediatamente após essa experiência, sempre, o tempo todo.

E faça a pesquisa o mais curta possível - no máximo 3 minutos!

Lupa pairando sobre uma pessoa
</Spacing>
<Spacing>

<h5>O feedback do cliente NÃO deve ser anônimo</h5>

Este é um choque para muitos que estão acostumados com pesquisas de mercado anônimas, mas os clientes em 2020 QUEREM que você saiba se eles tiveram uma experiência ruim e ESPERAM que você faça um acompanhamento para corrigir isso.

Você acessou o Twitter e o Facebook recentemente? Isso mesmo, você pode salvar um cliente potencialmente perdido que teve uma experiência ruim recentemente, acompanhando-o sistematicamente ANTES de levá-lo para a mídia social.

Dependendo do seu valor de vida do cliente (CLV), isso pode ser uma virada de jogo completa. Você pode configurar alertas em tempo real que vão para a pessoa apropriada em sua empresa, que é responsável por acompanhar o cliente e "fechar o ciclo". Essa atividade por si só torna sua empresa 10 vezes mais centrada no cliente.
 

Colegas de trabalho sentados em volta de uma mesa batendo palmas para uma pessoa
</Spacing>
<Spacing>

<h5>Identifique seus heróis CX, celebre-os e modele-os</h5>

Os clientes adoram fornecer feedback sobre experiências excepcionais, especialmente sobre um funcionário que fez algo especial para eles.

Se for o caso, certifique-se de perguntar aos clientes 1) se algum funcionário se esforçou para criar uma experiência excepcional, 2) o nome desse funcionário e 3) o que eles fizeram para tornar a experiência especial.

Você vai ganhar muito com isso!

Você identificará os “Heróis do CX” dentro de sua empresa. Reconheça-os, modele seus comportamentos e contrate mais pessoas como eles. O resultado final é uma cultura focada no cliente.


Mulher atendendo a ligação de um cliente em uma central de atendimento
</Spacing>
<Spacing>
<h5>Medir a experiência do funcionário é a base para uma ótima experiência do cliente</h5>

Se você quer clientes que gostem de você, recomendem, comprem mais e retornem, trate seus funcionários muito bem. São eles que fazem essas coisas acontecerem.

A medição da experiência do funcionário não é opcional - é essencial para uma organização centrada no cliente que está crescendo e prosperando.

Fale regularmente com seus funcionários por meio de pesquisas anônimas para saber como eles estão e o que poderia ser melhor. Comunique quais mudanças estão sendo feitas. Trate bem o seu povo.

Seus clientes agradecerão de mais maneiras do que você pode imaginar.`

const posts = [{
  title: "TITLE HEADING",
  author: "Title description",
  date: "Dec 5, 2017",
  content: newpost,
},
{
  title: "TITLE HEADING",
  author: "Title description",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
  date: "Dec 6, 2017",
},
{
  title: "TITLE HEADING",
  author: "Title description",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
  date: "Dec 7, 2017",
},
{
  title: "TITLE HEADING",
  author: "Title description",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex",
  date: "Dec 7, 2017",
},
]

const PostBlogs = () => {
  let renderized = posts.map(post => {
    return (<Post
      title={post.title}
      author={post.author}
      date={post.date}
      content={post.content} />)
  })
  return renderized;
}

export default class Blog extends Component {


  render() {
    return (
      <>
        <Menu />

        <Wrap>
          <Spacing />
          <Primary>
            <PostBlogs />
          </Primary>
        </Wrap>



        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-col">
                  <h4>Sobre a CouponFeed</h4>
                  <p>Somos fascinados em oferecer um dos mais atrativos serviços de coleta de informações sobre a
                            experiência dos clientes.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-col last">
                  <h4>Siga-nos nas redes sociais</h4>

                  <a href="https://fb.com/couponfeed"> <FaFacebook style={{ fontSize: 30 }} /></a>

                  <a href="https://instagram.com/couponfeed"> <FaInstagram style={{ fontSize: 30, marginLeft: 10 }} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="p-small">Copyright © 2020 <AnchorLink href="https://inovatik.com">Inovatik</AnchorLink > - All rights
                        reserved</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
