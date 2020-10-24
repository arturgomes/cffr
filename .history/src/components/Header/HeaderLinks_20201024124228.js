/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// core components
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import './styles.css';
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const componentOpenBlog = () => {
    window.open("https://blog.couponfeed.com.br", "_self");
  }
  const componentOpenPricing = () => {
    window.open("https://www.couponfeed.com.br/pricing", "_self");
  }
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => componentOpenBlog()}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Blog
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
                    onClick={() => componentOpenPricing()}

          color="transparent"
          target="_blank"
          rel="noopener"
          className={classes.navLink}
        >
          Preços
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          target="_blank"

          className={classes.navLink}
        >
          Área do Cliente
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/pricing"
          target="_blank"
          color="success"
          className="btn-solid-lg2"
        >
          Quero Vender Mais
        </Button>
      </ListItem>
    </List>
  );
}
