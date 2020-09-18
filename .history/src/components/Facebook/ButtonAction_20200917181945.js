import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ButtonAction(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        style={{backgroundColor:props.color}}
        className={classes.button}
        startIcon={props.icon}
        onClick={props.click}
      >
        {props.caption}
      </Button>
    </div>
  );
}