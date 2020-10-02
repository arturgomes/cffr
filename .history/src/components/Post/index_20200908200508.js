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
        
      </div>
    )
  }
}