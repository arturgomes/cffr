import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../../../../../components/Grid/GridItem.js";
import GridContainer from "../../../../../components/Grid/GridContainer.js";
import Card from "../../../../../components/Card/Card.js";
import CardBody from "../../../../../components/Card/CardBody.js";
import CardHeader from "../../../../../components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";

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

export default function RenderConclusion(props) {
  return (<GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="success">
          <h4 className={useStyles.cardTitleWhite}>Cadastro realizado com sucesso!</h4>
          
          
          {/* <p className={useStyles.cardCategoryWhite}>Complete seu perfil</p> */}
        </CardHeader>
        <CardBody>
        <p className={useStyles.cardCategoryWhite}>Obrigado, {props.state.name}, pelo seu cadastro! </p>
        {/* <p>Por gentileza, efetue o pagamento utilizando o link do PagSeguro abaixo.</p>
          <p><a href="https://pag.ae/7V_xDP3B9/button" title="Pagar com PagSeguro"><img src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar-laranja.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></a></p>
          <p className={useStyles.cardCategoryWhite}>Seu cadastro será ativado assim que recebermos o seu pagamento. Por favor, aguarde nosso contato. Até breve!</p> */}
          {/* <Link to={`/login`}>
            <Button type="submit"
              style={{ marginBottom: 16 }}
              fullWidth
              // variant="contained"
              color="primary"> Fazer login</Button>
          </Link> */}
        </CardBody>
      </Card>

    </GridItem>
  </GridContainer>)
}