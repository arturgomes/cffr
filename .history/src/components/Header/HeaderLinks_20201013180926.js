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
import './styles.css'
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const componentOpenBlog = () => {
    window.open("https://blog.couponfeed.com.br", "_self");
  }
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => componentOpenBlog()}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          {/* <CloudDownload className={classes.icons} />  */}
          Blog
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/pricing"
          color="transparent"
          target="_blank"
          rel="noopener"
          className={classes.navLink}
        >
          {/* <CloudDownload className={classes.icons} />  */}
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
          {/* <CloudDownload className={classes.icons} />  */}
          Área do Cliente
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/rsignup"
          // color="transparent"
          target="_blank"
          color="success"
          // round
          className="btn-solid-lg2"
        >
          Quero Vender Mais
        </Button>
      </ListItem>
    </List>
  );
}
