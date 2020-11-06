import React, { useState } from 'react'
import { Grid, Button, Typography, TextField } from "@material-ui/core";

function QualitativeQuestion(props) {
  const [text, settext] = useState('');
  const { quest } = props;
  const { question } = quest
  const fields = (<>
    <br />
    <TextField id="filled-basic"
      value={this.state.text}
      multiline
      rowsMin={3}
      fullWidth
      onChange={(e) => settext(e.target.value)} label="descreva aqui em poucas palavras" />
    <br />

    <Button
      // className='btn'
      onClick={() => props.onChange(text)}
      style={{ marginTop: 16, marginBottom: 16 }}
      fullWidth
      variant="contained"
      color="primary"
    >
      Enviar
      </Button>
    {/* // </Container> */}
  </>)
  return (<>

    <Typography variant="body1" component="body1">
      {question}
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {fields}
      </Grid>
    </Grid>
  </>)
}


export default QualitativeQuestion;

