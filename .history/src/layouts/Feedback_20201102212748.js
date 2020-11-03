import React, { Component } from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../assets/img/completa_fundo_claro@4x.png";
import Grid from '@material-ui/core/Grid';
import { FaSpinner } from 'react-icons/fa';

import Copyright from '../components/Copyright';
import Question from '../components/Feedback/question.js';
import Conclusion from '../components/Feedback/conclusion.js';

import api from "../services/api";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 300,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


export default class SignIn extends Component {
  state = {
    opening: null,
    questions: [],
    nps: null,
    comment: null,
    finished: false,
    error: null
  }


  handleNPS = async (answer) => {
    const { nps } = this.state;
    if (nps === null) {
      this.setState({
        nps: answer,
      }, () => { });
    }

  }

  handleComment = async (answer) => {
    const comm = answer;
    this.setState({
      finished: true,
      comment: comm

    }, () => { })

    const qs = decodeURIComponent(this.props.match.params.id);
    await api.post(`/feed/${qs}/c`, {
      answers: {
        nps: this.state.nps,
        com: answer
      }
    }).then(response => this.setState({
      fid: response.data.fid
    }, () => { })).catch(error => {
      console.log(error.message);
    })


  }

  async componentDidMount() {
    const qs = decodeURIComponent(this.props.match.params.id);

    const response = await api.post(`/feed/${qs}/f`);
    if (!response.error) {
      const quest = response.data.questions;
      const ope = response.data.opening;
      // console.log(response)
      this.setState({
        questions: quest,
        opening: ope
      }, () => { });

    }
    else {
      this.setState({ error: "Loja não encontrada" })
    }
  }
  display() {
    const fid = decodeURIComponent(this.props.match.params.id);
    if (!this.state.opening && !this.state.error) {
      return <FaSpinner color="#888" size={14} />

    }
    if (this.state.error) {
      return (<p>{this.state.error}</p>)
    }
    const { opening, finished, nps, questions } = this.state;
    let value = null;
    if (nps !== null) {
      if (nps >= 8) {
        value = questions[1].options[0].op
      }
      else if (nps < 8 && nps >= 6) {

        value = questions[1].options[1].op
      }
      else if (nps < 6) {

        value = questions[1].options[2].op
      }
    }
    // console.log(questions[0]);
    if (nps === null) {
      return (<Question
        key={0}
        opening={opening}
        quest={questions[0]}
        title={questions[0].question}
        onChange={this.handleNPS} />
      )
    } else if (!finished) {
      return (<Question
        key={1}
        opening={opening}
        quest={questions[1]}
        title={value}
        onChange={this.handleComment} />
      )
    }
    else {
      return <Conclusion fid={fid} />
    };
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Grid container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
        >
          <div className={useStyles.content}>
            <img src={logo} style={{ width: '300px', paddingBottom: '70px' }} alt="" />
          </div>
          {this.display()}
          <Copyright />
        </Grid >

      </div >
    );
  }
}
