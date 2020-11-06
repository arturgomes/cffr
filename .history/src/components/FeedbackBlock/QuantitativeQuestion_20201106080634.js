import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

function QuantitativeQuestion(props) {
  {
    fields = (<>
      {/* // <Container maxWidth="sm" style={{ fontSize: '14px' }}> */}
      {/* <QInput> */}
      <br />
      <TextField id="filled-basic"
        value={this.state.text}
        multiline
        rowsMin={3}
        fullWidth
        onChange={(e) => this.setState({ text: e.target.value })} label="descreva aqui em poucas palavras" />
      <br />

      <Button
        // className='btn'
        onClick={() => this.props.onChange(this.state.text)}
        style={{ marginTop: 16, marginBottom: 16 }}
        fullWidth
        variant="contained"
        color="primary"
      >Enviar</Button>
      {/* // </Container> */}
    </>)
    return (<>

      <Typography variant="body1" component="body1">
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {fields}
        </Grid>
      </Grid>
    </>)
  }
}


export default QuantitativeQuestion

