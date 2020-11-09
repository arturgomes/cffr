import React, { Component, } from 'react'
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BasicLayout from '../../components/CouponFeed/BasicLayout';
import Conclusion from "./Conclusion.js";
import QualitativeQuestion from "./QualitativeQuestion.js";
import QuantitativeQuestion from "./QuantitativeQuestion.js";



import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    width: '100%',
    color: '#000'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '16px 0 0',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  spacer: {
    flex: '1 1 auto',
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const steps = [
  // '',
  '1',
  '2',
];

const backFromAPI = {
  "data": {
    "opening": " Olá, eu sou o FeedBot, da CouponFeed. Estou aqui para conversar com você sobre sua experiência recente no estabelecimento Filial CouponFeed",
    "questions": [
      {
        "qid": "d3c64a66-1685-11ea-8d71-362b9e155667",
        "type": "radio", "question": "O quão satisfeito você está com nosso serviço de atendimento?", "options": [{ "id": 0, "value": 0, "color": "#b72125", "type": "detrator", "text": ":(" }, { "id": 1, "value": 1, "color": "#d52027", "type": "detrator", "text": ":(" }, { "id": 2, "value": 2, "color": "#f05223", "type": "detrator", "text": ":(" }, { "id": 3, "value": 3, "color": "#f37022", "type": "detrator", "text": ":(" }, { "id": 4, "value": 4, "color": "#faa823", "type": "detrator", "text": ":(" }, { "id": 5, "value": 5, "color": "#ffca27", "type": "detrator", "text": ":(" }, { "id": 6, "value": 6, "color": "#ecdb12", "type": "detrator", "text": ":(" }, { "id": 7, "value": 7, "color": "#e8e73d", "type": "neutro", "text": ":|" }, { "id": 8, "value": 8, "color": "#c5d82e", "type": "neutro", "text": ":|" }, { "id": 9, "value": 9, "color": "#afd135", "type": "promotor", "text": ":)" }, { "id": 10, "value": 10, "color": "#65b64d", "type": "promotor", "text": ":)" }]
      },
      {
        "qid": "d3c64a66-1685-11ea-8d71-362b9e155667",
        "question": "O quão satisfeito você está com nosso serviço de atendimento?", "type": "text", "options":
          [{
            "aid": "d3c64cc8-1685-11ea-8d71-362b9e155667",
            "op": "Que legal! O que mais você gostou no atendimento?"
          }, {
            "aid": "d3c64e1c-1685-11ea-8d71-362b9e155667",
            "op": "O que poderíamos fazer para tornar sua experiência como consumidor ainda melhor?"
          }, {
            "aid": "d3c64f5c-1685-11ea-8d71-362b9e155667",
            "op": "O que você acha que faltou hoje no atendimento a você ?"
          }]
      }]
  }
}
export default class Feed extends Component {
  state = {
    finished: false,
    comment: '',
    nps_value: null,
    fid: '',
    activeStep: 0,
    skipped: new Set()
  }



  handleNPS = async (answer) => {
    if (this.nps_value === null) {
      this.setState({ nps_value: answer })

    }
  }

  handleComment = async (answer) => {
    const comm = answer;
    this.setState({ finished: true, comment: comm })

    await api.post(`/feed/${props.fid}/c`, {
      answers: {
        nps: this.state.nps_value,
        com: this.state.comment
      }
    })
      .then(response =>
        this.setState({ fid: response.data.fid })
      ).catch(error => {
        console.log(error.message);
      })
  }

  isStepOptional = (step) => {
    return step === 1;
  };

  isStepSkipped = (step) => {
    return this.state.skipped.has(step);
  };

  handleNext = () => {
    let newSkipped = this.state.skipped;
    if (isStepSkipped(this.state.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(this.state.activeStep);
    }
    this.setState({
      activeStep: (prevActiveStep) => prevActiveStep + 1,
      skipped: newSkipped
    })
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  handleSkip = () => {
    if (!isStepOptional(this.state.activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(this.state.activeStep);
      return newSkipped;
    });
  };

  handleReset = () => {
    setActiveStep(0);
  };

  render() {
    return (
      <BasicLayout noavatar>
        <div className={classes.root}>
          {opening}
          {this.state.activeStep === steps.length ?
            (
              <React.Fragment>
                <Conclusion />
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                { this.state.activeStep === steps.length - 1 ? (
                  <QualitativeQuestion
                    question={questions[1]}
                    onChange={handleComment}
                  />
                ) : (
                    <QuantitativeQuestion
                      opening={opening}
                      question={questions[0]}
                      onChange={handleNPS}
                    />
                  )
                }

                <div className="">
                  <div className={classes.spacer} />
                  <Button
                    color="inherit"
                    disabled={this.state.activeStep === 0}
                    onClick={handleBack}
                    className=""
                  > Voltar </Button>
                  {isStepOptional(this.state.activeStep) && (
                    <Button
                      color="inherit"
                      onClick={handleSkip}
                      className=""
                    >
                      Pular
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {this.state.activeStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
                  </Button>
                </div>
              </React.Fragment>
            )
          }
          <Stepper activeStep={this.state.activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </BasicLayout>
    );

  }
}
