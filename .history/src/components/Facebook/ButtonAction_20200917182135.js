import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#3B5998"
    color:#FFF
  },
}));

export default function ButtonAction(props) {
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