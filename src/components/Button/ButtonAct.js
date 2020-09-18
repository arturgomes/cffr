import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#1DB954",
    color:"#FFF",
    width:"100%",
  },
}));

export default function ButtonAct(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={props.icon}
        onClick={props.click}
      >
        {props.caption}
      </Button>
    </div>
  );
}