import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
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
  '',
  '',
];

export default function FeedbackBlock(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [nps_value, setnps_value] = useState(null);
  const [questions, setquestions] = useState(null);
  const [comment, setcomment] = useState(null);
  const [opening, setopening] = useState(null);
  const [finished, setfinished] = useState(null);
  const [error, seterror] = useState(null);
  const [feedid, setFeedid] = useState(null);



  useEffect(() => {
    api.post(`/feed/${props.fid}/f`)
      .then(response => {
        console.log(response.data)
        const quest = response.data.questions;
        const ope = response.data.opening;
        setquestions(quest)
        setopening(ope)
      })
  }, [])


  const handleNPS = async (answer) => {
    if (nps_value === null) {
      this.setnps_value(answer);
    }
  }

  const handleComment = async (answer) => {
    const comm = answer;
    setfinished(true);
    setcomment(comm);

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

        {activeStep === steps.length ?
          (
            <React.Fragment>
              <Conclusion />

            </React.Fragment>
          ) :
          (
            <React.Fragment>
              { activeStep !== steps.length - 1 ? (
                <QualitativeQuestion
                  quest={questions[1]}
                />
              ) : (
                  <QuantitativeQuestion
                    opening={opening}
                    quest={questions[0]}
                  />
                )}

              <div className="">
                <div className={classes.spacer} />
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className=""
                > Voltar </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    color="inherit"
                    onClick={handleSkip}
                    className=""
                  >
                    Pular
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
                </Button>
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
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </BasicLayout>
  );
}