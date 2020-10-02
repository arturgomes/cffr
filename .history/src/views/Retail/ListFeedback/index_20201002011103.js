import React, { Component } from "react";
import { List } from "@material-ui/core";
// import { Feed, Icon, Item } from "semantic-ui-react";
import LinearProgress from '@material-ui/core/LinearProgress';
import {format,parseISO} from "date-fns";
import pt from 'date-fns/locale/pt';

import { FeedItem } from "./FeedbackItem";
import { ListFeedback } from "./ListFeedback";
// import '../../App.css';
import contente from "../../../assets/img/contente@4x.png";
import descontente from "../../../assets/img/descontente@4x.png";
import imparcial from "../../../assets/img/imparcial@4x.png";
import api from "../../../services/api";

import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
// import CustomInput from "../components/CustomInput/CustomInput.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CardBody from "../../../components/Card/CardBody.js";
import {
  isAuthenticated,
  getId,
  getName
} from "../../../services/auth";
// import ReactSpeedometer from 'react-d3-speedometer';
// import Dashboard from './dashboard/dashboard'
// import Main from './DemoPages/Main';
// import styles from "../../../assets/jss/material-dashboard-react/layouts/adminStyle.js";

export default class ListFeedback extends Component {

  state = {
    isLoading: true,
    fb: [
      {
        name: null,
        f: []
      }
    ]
  };

  async componentDidMount() {

    await api
      .post("/list", { retail_id: getId() })
    // await fetch(`https://api.couponfeed.co/list`, 
    // {
    //   method: "POST",
    //   credentials: "include",
    //   body: { retail_id: getId() },
    //   // mode: 'no-cors',
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Origin": "https://www.couponfeed.co"
    //   }
    // }
    // )
      .then(response => {
        this.setState({ fb: response.data, isLoading: false });
        // console.log(response.data);
      })
      .catch(error => {
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          // console.log(error.response.data);
          this.setState({ err: error.response.data });
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          // console.log(error.request);
        }
      });
  }

  handleMain = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  getAssets = nps => {
    if (nps >= 9) return contente;
    else if (nps >= 7 && nps < 9) return imparcial;
    else return descontente;
  };

  render() {
    
    if (this.state.isLoading) {
      return <LinearProgress />
    }
    else {
      return (
        <>
          <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader color="success">
                <h4 style={{
                  color: "rgba(255,255,255,1)",
                  margin: "0",
                  fontSize: "18px",
                  marginTop: "0",
                  marginBottom: "10px"
                }}>Listar QR Codes</h4>
                <p style={{
                  color: "rgba(255,255,255,.62)",
                  margin: "0",
                  fontSize: "14px",
                  marginTop: "0",
                  marginBottom: "0"
                }}>Listando todos os feedbacks de {getName()}</p>

                {/* <p className={useStyles.cardCategoryWhite}>Complete seu perfil</p> */}
              </CardHeader>
              <CardBody>

          <List className={classes.root}>{listItems}</List>
          <ListFeedback/>

          </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
        </GridItem>
      </GridContainer>
        </>
      );
    }
  }
}