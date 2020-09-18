import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  FaGoogle,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#3B5998",
    color:"#FFF",
    width:"100%",
    margin:"left"
  },
}));

export default function ButtonAction(props) {
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