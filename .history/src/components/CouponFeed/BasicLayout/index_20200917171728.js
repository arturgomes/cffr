import React from "react";
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../assets/img/completa_fundo_claro@4x.png";
import Copyright from "../Copyright";

import './style.css'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BasicLayout(props) {
  return (
    <>
      <div
        className="basicLayout"
      >
        <Grid container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
        >
          <div 
          // className={useStyles.content}
          >


            <a href="/">
              <img 
                src={logo} 
                alt="" 
                style={{ width: '300px', paddingBottom: '30px' }} />
            </a>

            {props.children}
            {/* {this.renderConclusion(error)} */}

          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
          {/* </Container> */}
        </Grid >
        {/* </Paper> */}

      </div >
    </>
  );
}