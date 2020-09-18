import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  FaGoogle,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#DB4437",
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
        startIcon={<FaGoogle/>}
        onClick={props.click}
      >
        {props.caption} Google
      </Button>
    </div>
  );
}