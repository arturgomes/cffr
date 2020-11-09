import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, } from "@material-ui/core";

function QuantitativeQuestion(props) {

  const fields = props.quest.options.map(option =>
    <Button
      key={option}
      size="small"
      style={{
        backgroundColor: option.color,
        color: '#fff',
        margin: '2px',
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '25px',
        minHeight: '30px'
      }}
      key={option}
      onClick={() => props.onChange(option.value)}
      type="button"
    >{option.value}
    </Button>
  )
  return (<>{props.opening}
    <p>{props.quest.question}</p>
    <ButtonGroup orientation="horizontal" color="primary" aria-label="outlined primary button group" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
    }}>
      {fields}
      {/* <Button></Button> */}
    </ButtonGroup>

  </ >)
}


export default QuantitativeQuestion;

