import React, { Component } from 'react';
import { Button, ButtonGroup, Slider, Container } from "@material-ui/core";

export default class NPS extends Component {
  state = {
    text: ''
  }

  render() {
    const { quest } = this.props;
    let fields = null;
    if (quest.type === 'radio') {
      fields = quest.options.map(option =>

        <Button
          key={option}
          onClick={() => this.props.onChange(option.value)}
          type="button"
        >{option.value}</Button>

      )
      return (<>
        <p>{quest.question}</p>
        <ButtonGroup orientation="horizontal" color="primary" aria-label="outlined primary button group">
          {fields}
        </ButtonGroup>

      </>)
    } else if (quest.type === 'text') {
      fields = (
        <p>
          <input
            type="text"
            placeholder="Digite sua sugestão"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button // vamo pro outro
            onClick={() => this.props.onChange(this.state.text)}
            type="button"
          >Enviar</button>
        </p>
      )
      return (<>
        <p>{quest.question}</p>
        {fields}
      </>)
    }



  }

} 