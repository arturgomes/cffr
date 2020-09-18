import PropTypes from 'prop-types'
import React, { Component } from "react";
import styled from 'styled-components';


const Text = styled.div`
  text-align: justify;
  text-justify: inter-word;
  margin-bottom:5px;
`
const Spacing = styled.div`
    height: 100px;
`
const Wrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`

const Primary = styled.div`
    max-width: 650px;
    margin: 0 auto;
    margin-bottom:20px;
    font-family: 'Sen', sans-serif;
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


export default class Post extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Block>
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a vestibulum tellus. Etiam neque metus, porttitor id ullamcorper id, accumsan non nisi. Nullam justo lacus, gravida et sagittis pellentesque, lobortis quis turpis. Aenean rhoncus vitae lacus vel tristique. Aenean id ligula sed justo euismod placerat et ut lacus. Maecenas eget egestas justo. Nam hendrerit sem risus, rutrum ullamcorper libero sodales eleifend. Vivamus ac lectus diam. Proin tempor nulla elit, eu tempus arcu cursus eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam a ultricies diam. Phasellus tempor tortor a dui molestie dictum. Duis non neque ex.</Text>
          <Text>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla fringilla eget dui eu sagittis. Aliquam a finibus neque, et faucibus quam. Nulla nec massa mattis, euismod ligula et, placerat ex. Donec iaculis ex ut tortor ullamcorper, vel vulputate leo pharetra. Integer sodales odio sapien, id pulvinar enim gravida vitae. In a nibh mi. Sed pulvinar quis ex nec convallis. Aenean mollis, lacus sed facilisis dictum, nulla leo tincidunt felis, sed cursus lectus justo gravida lectus. Sed mattis lobortis lectus auctor hendrerit. Integer mollis sem sed erat tincidunt, eget tincidunt nunc consequat.</Text>
          <Text>Pellentesque vulputate consectetur posuere. Vivamus feugiat arcu dui, nec lacinia sem consectetur a. Phasellus ac blandit orci. Proin fringilla urna justo, et condimentum metus aliquet a. Integer lobortis enim vitae justo bibendum dignissim. Cras vehicula metus id lobortis facilisis. Vestibulum vel odio elit. Sed id nisl in risus bibendum malesuada. Suspendisse convallis ipsum in urna pharetra viverra. Proin placerat massa mollis justo auctor, ut rutrum quam finibus. Aliquam suscipit est vestibulum suscipit venenatis. Pellentesque ultricies augue vitae diam imperdiet, vel volutpat orci varius. Nulla in erat velit. Pellentesque ligula justo, faucibus malesuada massa nec, efficitur sagittis sapien.</Text>
          <Text>Vestibulum justo dolor, aliquet eget blandit nec, ornare ut erat. In luctus aliquam laoreet. Etiam libero risus, semper ac turpis eget, vestibulum imperdiet neque. Aliquam hendrerit diam turpis, eget hendrerit tortor dictum in. Vestibulum vel nunc a dui porta convallis vel sit amet enim. In pulvinar ultrices justo, et placerat nisi maximus nec. Aliquam at pellentesque magna. Praesent convallis purus ut urna rhoncus, quis egestas tellus facilisis. </Text>
          <Text>PageRank is the search algorithm that started it all. Today it's a multibillion dollar company.</Text>
        </Block>
      </div>
    )
  }
}
