import React,from "react";
import styled from 'styled-components';


const Spacing = styled.div`
    margin-top: 30px;
`

const Primary = styled.div`
    max-width: 650px;
    margin: 0 auto;
    margin-top:50px;
    margin-bottom:20px;
    font-family: 'Sen', sans-serif;
`
const Author = styled.span`
color:#3838
`

const Block = styled.div`
    padding:25px;
    border: "0";
    margin-bottom: "30px";
    margin-top: "30px";
    border-radius: "6px";
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)";
    background: whiteColor;
    width: "100%";
    box-shadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)";
    position: "relative";
    display: "flex";
    flex-direction: "column";
    min-width: "0";
    word-wrap: "break-word";
    font-size: ".875rem";
  /* cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out; */
  /* &:hover {
    background-color: darkgray;
    color: white;
  } */
`;
export default function componentName() {
  return (
    <>
    <Block>
    <h2>5 Estratégias para ter Excelência em CX</h2>
    <h5>24 de Setembro de 2020, por <Author>Artur</Author></h5>
<Primary>
  <Spacing><h5>Medir a experiência do cliente e do funcionário é um processo contínuo, não um evento</h5>

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

  Se for o caso, certifique-se de perguntar aos clientes 1. se algum funcionário se esforçou para criar uma experiência excepcional, 2. o nome desse funcionário e 3. o que eles fizeram para tornar a experiência especial.

  Você vai ganhar muito com isso!

  Você identificará os “Heróis do CX” dentro de sua empresa. Reconheça-os, modele seus comportamentos e contrate mais pessoas como eles. O resultado final é uma cultura focada no cliente.


  Mulher atendendo a ligação de um cliente em uma central de atendimento
  </Spacing>
    <Spacing>
      <h5>Medir a experiência do funcionário é a base para uma ótima experiência do cliente</h5>

  Se você quer clientes que gostem de você, recomendem, comprem mais e retornem, trate seus funcionários muito bem. São eles que fazem essas coisas acontecerem.

  A medição da experiência do funcionário não é opcional - é essencial para uma organização centrada no cliente que está crescendo e prosperando.

  Fale regularmente com seus funcionários por meio de pesquisas anônimas para saber como eles estão e o que poderia ser melhor. Comunique quais mudanças estão sendo feitas. Trate bem o seu povo.

  Seus clientes agradecerão de mais maneiras do que você pode imaginar.
  </Spacing>
  </Primary>
  </Block>
  </>

  );
}




