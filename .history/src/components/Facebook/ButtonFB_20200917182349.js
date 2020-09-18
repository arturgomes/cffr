import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#3B5998",
    color:"#FFF"
  },
}));

export default function ButtonAction(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<FaFacebook/>}
        onClick={props.click}
      >
        {props.caption} Facebook
      </Button>
    </div>
  );
}