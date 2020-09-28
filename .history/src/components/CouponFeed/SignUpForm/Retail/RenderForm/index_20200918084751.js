import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import GridItem from "../../../../../components/Grid/GridItem.js";
import GridContainer from "../../../../../components/Grid/GridContainer.js";
import Button from "../../../../../components/CustomButtons/Button.js";
import Card from "../../../../../components/Card/Card.js";
import CardBody from "../../../../../components/Card/CardBody.js";


const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
export default function RenderForm(props) {
  return (
      <Card>
        
        <CardBody>
          <p>Olá, obrigado por escolher a CouponFeed. Vamos começar nossa parceria com um breve cadastro da sua empresa.
          </p>
          <p>
            {/* O valor mensal para ter acesso à CouponFeed é de R$29,90. */}
          </p>
          {props.error ? <div className="divError">{props.error}</div> : ``}
          <form
            className={useStyles.form}
            noValidate
            onSubmit={props.handleSubmit}
          >

            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  // variant="outlined"
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
                  name="cnpj"
                  label="CNPJ"
                  onChange={props.handleCNPJInput}
                  value={props.state.tmp_cnpj}
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
                // autoComplete="fname"
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
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="address_zip"
                  style={{ marginBottom: 16 }}
                  label="CEP"
                  onChange={props.handleAddressZip}
                  value={props.state.address_zip_tmp}
                  autoComplete="fname"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <TextField
                  required
                  fullWidth
                  name="address_number"
                  label="Número"
                  onChange={props.handleAddressNumber}
                  value={props.state.address_number}
                  autoComplete="fname"
                />
              </GridItem>
            </GridContainer>
        
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  fullWidth
                  name="address_comp"
                  style={{ marginBottom: 16 }}
                  label="Complemento"
                  onChange={props.handleAddressComp}
                  value={props.state.address_comp}
                  autoComplete="fname"
                />
              </GridItem>
            </GridContainer>

            <GridContainer style={{ paddingTop: "30px" }}>

              <GridItem xs={12} sm={12} md={12}>
                <Button
                  fullWidth
                  type="submit"

                  color="success">
                  Tudo pronto pra começar!</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>

                <Link
                  href="/rlogin" variant="body2">
                  {"Já é cadastrado? Faça já o seu login!"}
                </Link>
              </GridItem>
            </GridContainer>
          </form>

        </CardBody>
      </Card>
  )

}