import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup, } from "@material-ui/core";

function QualitativeQuestion(props) {

  const { opening, quest } = this.props;
  const fields = quest.options.map(option =>
    <>
      <Button
        size="small"
        style={{ backgroundColor: option.color, color: '#fff', margin: '2px', maxWidth: '30px', maxHeight: '30px', minWidth: '25px', minHeight: '30px' }}
        key={option}
        onClick={() => this.props.onChange(option.value)}
        type="button"
      >{option.value}
      </Button>
    </>
  )
  return (<>{opening}
    <p>{quest.question}</p>
    <ButtonGroup orientation="horizontal" color="primary" aria-label="outlined primary button group" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
    }}>
      {fields}
    </ButtonGroup>

  </ >)
  return (
    <div>
      <Typography className="">
        pergunta qualitativa
              </Typography>
    </div>
  )
}


export default QualitativeQuestion

