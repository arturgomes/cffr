import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, } from "@material-ui/core";
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Grid, TextField } from "@material-ui/core";

import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BasicLayout from '../../components/CouponFeed/BasicLayout';
import Conclusion from "./Conclusion.js";
import QualitativeQuestion from "./QualitativeQuestion.js";
// import QuantitativeQuestion from "./QuantitativeQuestion.js";
import './styles.css'


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
export default function FeedbackBlock(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [nps_value, setNPS_value] = useState(null);
  const [comment, setComment] = useState("");
  const [finished, setFinished] = useState(null);
  const [feedid, setFeedid] = useState(null);
  const [text, settext] = useState('');

  const [questions, setQuestions] = useState(backFromAPI.data.questions)
  const [opening, setOpening] = useState("")
  console.log(questions, opening)

  useEffect(() => {
    const initialState = async () => {
      const { data } = backFromAPI//await api.post(`/feed/${props.fid}/f`)
      setQuestions(data.questions);
      setOpening(data.opening);
    }
    initialState();
  }, [])


  const handleNPS = async (answer) => {
    if (nps_value === null) {
      setNPS_value(answer);
      handleNext();
    }
  }

  const handleComment = async (answer) => {
    const comm = answer;
    setFinished(true);
    setComment(comm);

    await api.post(`/feed/${props.fid}/c`, {
      answers: {
        nps: nps_value,
        com: comment
      }
    })
      .then(response =>
        setFeedid(response.data.fid)
      ).catch(error => {
        console.log(error.message);
      })
    handleNext();
  }

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <BasicLayout noavatar>
      <div className={classes.root}>
        {opening}
        {activeStep === steps.length ?
          (
            <React.Fragment>
              <Conclusion />
            </React.Fragment>
          ) :
          (
            <React.Fragment>
              { activeStep === steps.length - 1 ? (
                <>

                  <Typography >
                    {questions[1].question}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {(<>
                        <br />
                        <TextField id="filled-basic"
                          value={text}
                          multiline
                          rowsMin={3}
                          fullWidth
                          onChange={(e) => settext(e.target.value)} label="descreva aqui em poucas palavras" />
                        <br />

                        <Button
                          // className='btn'
                          onClick={() => handleComment(text)}
                          style={{ marginTop: 16, marginBottom: 16 }}
                          fullWidth
                          variant="contained"
                          color="primary"
                        >
                          Enviar
                  </Button>
                        {/* // </Container> */}
                      </>)}
                    </Grid>
                  </Grid>
                </>
              ) : (
                  <>{opening}
                    <p>{questions[0].question}</p>
                    <ButtonGroup
                      orientation="horizontal"
                      color="primary"
                      aria-label="outlined primary button group"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                      }}>
                      {questions[0].options.map((option, index) =>
                        <Button
                          size="small"
                          style={{
                            backgroundColor: option.color,
                            color: '#fff',
                            padding: '2px',
                            width: '10px',
                            // margin: '1px',
                            // width: '15px',
                            fontSize: '10px',
                            // maxWidth: '20px',
                            // maxHeight: '20px',
                            // height: '20px',
                            // minHeight: '20px',
                            border: '1px solid #fff',
                            borderRadius: '3px'
                          }}
                          key={index}
                          onClick={() => handleNPS(option.value)}
                          type="button"
                        >{option.value}
                        </Button>
                      )}
                      {/* <Button></Button> */}
                    </ButtonGroup>

                  </ >
                )
              }

              <div className="">
                <div className={classes.spacer} />
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className=""
                > Voltar </Button>
                {/* {isStepOptional(activeStep) && (
                  <Button
                    color="inherit"
                    onClick={handleSkip}
                    className=""
                  >
                    Pular
                  </Button>
                )} */}

                {/* <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
                </Button> */}
              </div>
            </React.Fragment>
          )
        }
        <Stepper activeStep={activeStep}>
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