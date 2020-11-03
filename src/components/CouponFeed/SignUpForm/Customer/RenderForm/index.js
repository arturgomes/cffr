

import React from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import GridItem from "../../../../../components/Grid/GridItem.js";
import GridContainer from "../../../../../components/Grid/GridContainer.js";
import Button from "../../../../../components/CustomButtons/Button.js";
import Card from "../../../../../components/Card/Card.js";
import CardHeader from "../../../../../components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "../../../../../components/Card/CardBody.js";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function RenderForm(props) {
  return (<GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <h4 className={useStyles.cardTitleWhite}>Cadastrar Usuário</h4>

          {/* <p className={useStyles.cardCategoryWhite}>Complete seu perfil</p> */}
        </CardHeader>
        <CardBody>
          <p>Olá, obrigado por escolher a CouponFeed. Vamos nos cadastrar?</p>
          <form
            className={useStyles.form}
            noValidate
            onSubmit={props.handleSubmit}
          >
            {props.error ? <div className="divError">{props.error}</div> : ``}

            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  value={props.state.name}
                  onChange={props.handleNameInput}
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />

              </GridItem>

            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  onChange={props.handleCPFInput}
                  value={props.state.tmp_cpf}
                  autoComplete="fname"
                />

              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Telefone"
                  placeholder="(__) __________"
                  onChange={props.handlePhoneInput}
                  value={props.state.phone}
                  name="phone"
                  autoComplete="phone"
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  style={{ marginBottom: 16 }}
                  label="Endereço de Email"
                  onChange={props.handleEmailInput}
                  value={props.state.email}
                />

              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="passw"
                  label="Senha"
                  type="password"
                  onChange={props.handlePasswInput}
                  value={props.state.passw}
                />
              </GridItem>
            </GridContainer>


            <GridContainer>

              <GridItem xs={12} sm={12} md={12}>
                <Button
                  fullWidth
                  type="submit"
                  style={{ marginTop: '30px' }}
                  color="success">
                  Tudo pronto pra começar!</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>

                <Link
                  href="/login" variant="body2">
                  {"Já é cadastrado? Faça já o seu login!"}
                </Link>
              </GridItem>
            </GridContainer>
          </form>

          {/* <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Link href="/">

                            <Button
                              fullWidth
                              color="warning">
                              Sou Lojista e quero começar!</Button>
                          </Link>

                        </GridItem>
                      </GridContainer> */}
        </CardBody>
      </Card>

    </GridItem>
  </GridContainer>)
}